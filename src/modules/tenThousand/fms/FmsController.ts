import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fms")
export default class FmsController {
  @operation({
    summary: "Get Fms",
  })
  @get()
  static getFms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fms",
  })
  @post("{id}")
  static createFms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
