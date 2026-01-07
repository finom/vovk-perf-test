import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsg")
export default class BsgController {
  @operation({
    summary: "Get Bsg",
  })
  @get()
  static getBsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsg",
  })
  @post("{id}")
  static createBsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
