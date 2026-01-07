import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnl")
export default class FnlController {
  @operation({
    summary: "Get Fnl",
  })
  @get()
  static getFnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnl",
  })
  @post("{id}")
  static createFnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
