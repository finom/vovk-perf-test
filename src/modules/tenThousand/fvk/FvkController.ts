import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvk")
export default class FvkController {
  @operation({
    summary: "Get Fvk",
  })
  @get()
  static getFvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvk",
  })
  @post("{id}")
  static createFvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
