import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqo")
export default class GqoController {
  @operation({
    summary: "Get Gqo",
  })
  @get()
  static getGqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqo",
  })
  @post("{id}")
  static createGqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
