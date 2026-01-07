import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bis")
export default class BisController {
  @operation({
    summary: "Get Bis",
  })
  @get()
  static getBis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bis",
  })
  @post("{id}")
  static createBis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
