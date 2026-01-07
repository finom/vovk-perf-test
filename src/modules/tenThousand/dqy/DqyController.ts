import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqy")
export default class DqyController {
  @operation({
    summary: "Get Dqy",
  })
  @get()
  static getDqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqy",
  })
  @post("{id}")
  static createDqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
