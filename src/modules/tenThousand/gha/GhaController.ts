import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gha")
export default class GhaController {
  @operation({
    summary: "Get Gha",
  })
  @get()
  static getGha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gha",
  })
  @post("{id}")
  static createGha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
