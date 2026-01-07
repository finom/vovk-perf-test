import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itm")
export default class ItmController {
  @operation({
    summary: "Get Itm",
  })
  @get()
  static getItm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itm",
  })
  @post("{id}")
  static createItm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
