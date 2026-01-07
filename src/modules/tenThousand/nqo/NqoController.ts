import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqo")
export default class NqoController {
  @operation({
    summary: "Get Nqo",
  })
  @get()
  static getNqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqo",
  })
  @post("{id}")
  static createNqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
