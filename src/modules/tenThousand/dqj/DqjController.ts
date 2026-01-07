import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqj")
export default class DqjController {
  @operation({
    summary: "Get Dqj",
  })
  @get()
  static getDqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqj",
  })
  @post("{id}")
  static createDqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
