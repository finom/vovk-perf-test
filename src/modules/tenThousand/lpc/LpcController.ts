import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpc")
export default class LpcController {
  @operation({
    summary: "Get Lpc",
  })
  @get()
  static getLpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpc",
  })
  @post("{id}")
  static createLpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
