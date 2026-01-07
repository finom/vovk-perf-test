import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iua")
export default class IuaController {
  @operation({
    summary: "Get Iua",
  })
  @get()
  static getIua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iua",
  })
  @post("{id}")
  static createIua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
