import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dop")
export default class DopController {
  @operation({
    summary: "Get Dop",
  })
  @get()
  static getDop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dop",
  })
  @post("{id}")
  static createDop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
