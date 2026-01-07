import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnu")
export default class BnuController {
  @operation({
    summary: "Get Bnu",
  })
  @get()
  static getBnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnu",
  })
  @post("{id}")
  static createBnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
