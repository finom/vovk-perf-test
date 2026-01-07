import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqk")
export default class DqkController {
  @operation({
    summary: "Get Dqk",
  })
  @get()
  static getDqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqk",
  })
  @post("{id}")
  static createDqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
