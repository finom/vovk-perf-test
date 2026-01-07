import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvh")
export default class FvhController {
  @operation({
    summary: "Get Fvh",
  })
  @get()
  static getFvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvh",
  })
  @post("{id}")
  static createFvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
