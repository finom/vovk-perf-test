import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqn")
export default class GqnController {
  @operation({
    summary: "Get Gqn",
  })
  @get()
  static getGqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqn",
  })
  @post("{id}")
  static createGqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
