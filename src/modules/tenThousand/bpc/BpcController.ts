import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpc")
export default class BpcController {
  @operation({
    summary: "Get Bpc",
  })
  @get()
  static getBpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpc",
  })
  @post("{id}")
  static createBpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
