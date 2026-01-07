import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqq")
export default class DqqController {
  @operation({
    summary: "Get Dqq",
  })
  @get()
  static getDqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqq",
  })
  @post("{id}")
  static createDqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
