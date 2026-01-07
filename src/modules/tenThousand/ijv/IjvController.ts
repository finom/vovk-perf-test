import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijv")
export default class IjvController {
  @operation({
    summary: "Get Ijv",
  })
  @get()
  static getIjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijv",
  })
  @post("{id}")
  static createIjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
