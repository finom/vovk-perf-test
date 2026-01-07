import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elw")
export default class ElwController {
  @operation({
    summary: "Get Elw",
  })
  @get()
  static getElw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elw",
  })
  @post("{id}")
  static createElw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
