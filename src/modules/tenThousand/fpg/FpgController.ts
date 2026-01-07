import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpg")
export default class FpgController {
  @operation({
    summary: "Get Fpg",
  })
  @get()
  static getFpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpg",
  })
  @post("{id}")
  static createFpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
