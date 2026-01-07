import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jua")
export default class JuaController {
  @operation({
    summary: "Get Jua",
  })
  @get()
  static getJua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jua",
  })
  @post("{id}")
  static createJua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
