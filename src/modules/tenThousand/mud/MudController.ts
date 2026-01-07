import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mud")
export default class MudController {
  @operation({
    summary: "Get Mud",
  })
  @get()
  static getMud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mud",
  })
  @post("{id}")
  static createMud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
