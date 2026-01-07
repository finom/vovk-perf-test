import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwg")
export default class IwgController {
  @operation({
    summary: "Get Iwg",
  })
  @get()
  static getIwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwg",
  })
  @post("{id}")
  static createIwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
