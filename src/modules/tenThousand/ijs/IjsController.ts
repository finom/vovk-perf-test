import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijs")
export default class IjsController {
  @operation({
    summary: "Get Ijs",
  })
  @get()
  static getIjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijs",
  })
  @post("{id}")
  static createIjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
