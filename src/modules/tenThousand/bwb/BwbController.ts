import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwb")
export default class BwbController {
  @operation({
    summary: "Get Bwb",
  })
  @get()
  static getBwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwb",
  })
  @post("{id}")
  static createBwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
