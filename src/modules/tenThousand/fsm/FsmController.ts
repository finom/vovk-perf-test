import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsm")
export default class FsmController {
  @operation({
    summary: "Get Fsm",
  })
  @get()
  static getFsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsm",
  })
  @post("{id}")
  static createFsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
