import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqn")
export default class CqnController {
  @operation({
    summary: "Get Cqn",
  })
  @get()
  static getCqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqn",
  })
  @post("{id}")
  static createCqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
