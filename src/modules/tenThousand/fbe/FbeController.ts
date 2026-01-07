import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbe")
export default class FbeController {
  @operation({
    summary: "Get Fbe",
  })
  @get()
  static getFbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbe",
  })
  @post("{id}")
  static createFbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
