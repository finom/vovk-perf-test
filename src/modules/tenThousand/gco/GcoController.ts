import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gco")
export default class GcoController {
  @operation({
    summary: "Get Gco",
  })
  @get()
  static getGco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gco",
  })
  @post("{id}")
  static createGco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
