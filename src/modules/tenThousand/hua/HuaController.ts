import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hua")
export default class HuaController {
  @operation({
    summary: "Get Hua",
  })
  @get()
  static getHua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hua",
  })
  @post("{id}")
  static createHua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
