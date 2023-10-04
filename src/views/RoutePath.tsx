import 채용 from "./main/채용";
import 팀문화 from "./main/팀문화";
import 회사소개 from "./main/회사소개";
import 채용상세 from "./main/채용_상세";
import 사람들 from "./main/사람들";

export class RoutePath {
    static readonly 회사소개 = {
        path: "/",
        element: <회사소개 />
    };
    static readonly 팀문화 = {
        path: "/views/team-culture",
        element: <팀문화 />
    };
    static readonly 채용 = {
        path: "/views/careers",
        element: <채용 />
    };
    static readonly 채용상세 = {
        path: "/views/careerDetail",
        element: <채용상세 />
    };
    static readonly 사람들 = {
        path: "/views/people",
        element: <사람들 />
    };
}
