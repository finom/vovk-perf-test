import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mer")
export default class MerController {
  @operation({
    summary: "Get Mer",
  })
  @get()
  static getMer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mer",
  })
  @post("{id}")
  static createMer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
