import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bij")
export default class BijController {
  @operation({
    summary: "Get Bij",
  })
  @get()
  static getBij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bij",
  })
  @post("{id}")
  static createBij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
