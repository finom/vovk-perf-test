import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mni")
export default class MniController {
  @operation({
    summary: "Get Mni",
  })
  @get()
  static getMni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mni",
  })
  @post("{id}")
  static createMni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
