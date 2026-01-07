import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baj")
export default class BajController {
  @operation({
    summary: "Get Baj",
  })
  @get()
  static getBaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Baj",
  })
  @post("{id}")
  static createBaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
