import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fni")
export default class FniController {
  @operation({
    summary: "Get Fni",
  })
  @get()
  static getFni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fni",
  })
  @post("{id}")
  static createFni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
