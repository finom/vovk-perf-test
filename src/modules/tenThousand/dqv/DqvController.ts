import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqv")
export default class DqvController {
  @operation({
    summary: "Get Dqv",
  })
  @get()
  static getDqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqv",
  })
  @post("{id}")
  static createDqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
