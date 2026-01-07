import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cto")
export default class CtoController {
  @operation({
    summary: "Get Cto",
  })
  @get()
  static getCto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cto",
  })
  @post("{id}")
  static createCto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
