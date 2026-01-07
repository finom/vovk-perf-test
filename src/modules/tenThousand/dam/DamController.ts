import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dam")
export default class DamController {
  @operation({
    summary: "Get Dam",
  })
  @get()
  static getDam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dam",
  })
  @post("{id}")
  static createDam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
