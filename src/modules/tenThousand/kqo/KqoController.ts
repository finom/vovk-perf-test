import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqo")
export default class KqoController {
  @operation({
    summary: "Get Kqo",
  })
  @get()
  static getKqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqo",
  })
  @post("{id}")
  static createKqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
