import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eua")
export default class EuaController {
  @operation({
    summary: "Get Eua",
  })
  @get()
  static getEua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eua",
  })
  @post("{id}")
  static createEua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
