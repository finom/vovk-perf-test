import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brb")
export default class BrbController {
  @operation({
    summary: "Get Brb",
  })
  @get()
  static getBrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brb",
  })
  @post("{id}")
  static createBrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
