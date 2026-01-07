import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bic")
export default class BicController {
  @operation({
    summary: "Get Bic",
  })
  @get()
  static getBic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bic",
  })
  @post("{id}")
  static createBic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
