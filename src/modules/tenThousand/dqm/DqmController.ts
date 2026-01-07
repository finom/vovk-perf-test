import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqm")
export default class DqmController {
  @operation({
    summary: "Get Dqm",
  })
  @get()
  static getDqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqm",
  })
  @post("{id}")
  static createDqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
