import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqn")
export default class NqnController {
  @operation({
    summary: "Get Nqn",
  })
  @get()
  static getNqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqn",
  })
  @post("{id}")
  static createNqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
