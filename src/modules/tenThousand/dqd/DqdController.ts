import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqd")
export default class DqdController {
  @operation({
    summary: "Get Dqd",
  })
  @get()
  static getDqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqd",
  })
  @post("{id}")
  static createDqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
