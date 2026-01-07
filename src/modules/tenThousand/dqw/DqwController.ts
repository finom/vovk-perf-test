import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqw")
export default class DqwController {
  @operation({
    summary: "Get Dqw",
  })
  @get()
  static getDqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqw",
  })
  @post("{id}")
  static createDqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
