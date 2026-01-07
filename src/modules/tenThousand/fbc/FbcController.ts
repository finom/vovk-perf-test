import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbc")
export default class FbcController {
  @operation({
    summary: "Get Fbc",
  })
  @get()
  static getFbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbc",
  })
  @post("{id}")
  static createFbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
