import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqn")
export default class DqnController {
  @operation({
    summary: "Get Dqn",
  })
  @get()
  static getDqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqn",
  })
  @post("{id}")
  static createDqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
