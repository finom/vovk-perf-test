import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqn")
export default class LqnController {
  @operation({
    summary: "Get Lqn",
  })
  @get()
  static getLqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqn",
  })
  @post("{id}")
  static createLqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
