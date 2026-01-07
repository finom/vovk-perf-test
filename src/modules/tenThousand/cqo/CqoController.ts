import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqo")
export default class CqoController {
  @operation({
    summary: "Get Cqo",
  })
  @get()
  static getCqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqo",
  })
  @post("{id}")
  static createCqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
