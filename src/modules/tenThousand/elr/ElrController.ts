import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elr")
export default class ElrController {
  @operation({
    summary: "Get Elr",
  })
  @get()
  static getElr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elr",
  })
  @post("{id}")
  static createElr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
