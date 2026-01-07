import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aua")
export default class AuaController {
  @operation({
    summary: "Get Aua",
  })
  @get()
  static getAua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aua",
  })
  @post("{id}")
  static createAua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
