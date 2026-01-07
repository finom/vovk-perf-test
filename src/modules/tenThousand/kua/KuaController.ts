import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kua")
export default class KuaController {
  @operation({
    summary: "Get Kua",
  })
  @get()
  static getKua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kua",
  })
  @post("{id}")
  static createKua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
