import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqh")
export default class DqhController {
  @operation({
    summary: "Get Dqh",
  })
  @get()
  static getDqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqh",
  })
  @post("{id}")
  static createDqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
