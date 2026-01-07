import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqo")
export default class DqoController {
  @operation({
    summary: "Get Dqo",
  })
  @get()
  static getDqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqo",
  })
  @post("{id}")
  static createDqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
