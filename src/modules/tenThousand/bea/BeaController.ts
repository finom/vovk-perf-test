import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bea")
export default class BeaController {
  @operation({
    summary: "Get Bea",
  })
  @get()
  static getBea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bea",
  })
  @post("{id}")
  static createBea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
