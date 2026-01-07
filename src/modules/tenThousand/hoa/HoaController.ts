import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoa")
export default class HoaController {
  @operation({
    summary: "Get Hoa",
  })
  @get()
  static getHoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoa",
  })
  @post("{id}")
  static createHoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
