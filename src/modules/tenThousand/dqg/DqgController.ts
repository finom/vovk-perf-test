import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqg")
export default class DqgController {
  @operation({
    summary: "Get Dqg",
  })
  @get()
  static getDqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqg",
  })
  @post("{id}")
  static createDqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
