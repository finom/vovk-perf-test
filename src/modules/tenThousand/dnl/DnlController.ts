import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnl")
export default class DnlController {
  @operation({
    summary: "Get Dnl",
  })
  @get()
  static getDnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnl",
  })
  @post("{id}")
  static createDnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
