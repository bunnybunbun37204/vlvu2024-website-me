import type { APIRoute } from "astro";
import { supabase } from "../../utils/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const datas = await request.formData();

    const user_name = cookies.get('id');
    const name = datas.get('name');
    const student_id = datas.get('student_id');
    const role = datas.get('role');    
    const nickname = datas.get('nickname');

    const { error } = await supabase
        .from("users")
        .insert([
            {
                user_name: user_name?.value,
                student_id: student_id,
                name: name,
                role: role,
                nickname: nickname
            },
        ])
        .select();
    if (error) {
        console.log(error.message);
        
        return new Response("Register "+ error.message);
    }
    else {
        const { error } = await supabase
        .from("character")
        .insert([
          {
            user_name: user_name?.value,
            body: 'body1',
            eye: '',
            hair: '',
            back_hair: '',
            pants: '',
            clothes: '',
            chop: '',
            shoes: '',
            glasses: '',
            mounth: ''
          },
        ])
        .select();
        if (error) {
            console.log("ERROR", error.message);
            
            return new Response(error.message + "CHAR");
        }
        return redirect('/main')
    }
}


export const GET: APIRoute = async ({ request }) => {
    const urlSearchParams = new URL(request.url);
    const param = urlSearchParams.searchParams.get('username')
    let { data: users, error } = await supabase
        .from('users')
        .select('*').eq('user_name', param)

    if (error) {
        console.log(error);
        return new Response(error.message);
    }
    else {
        return new Response(JSON.stringify(users));
    }
}