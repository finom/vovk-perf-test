import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqo")
export default class LqoController {
  @operation({
    summary: "Get Lqo",
  })
  @get()
  static getLqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqo",
  })
  @post("{id}")
  static createLqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
