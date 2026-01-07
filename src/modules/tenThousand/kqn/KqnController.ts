import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqn")
export default class KqnController {
  @operation({
    summary: "Get Kqn",
  })
  @get()
  static getKqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqn",
  })
  @post("{id}")
  static createKqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
