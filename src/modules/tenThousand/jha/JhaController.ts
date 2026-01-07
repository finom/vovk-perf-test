import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jha")
export default class JhaController {
  @operation({
    summary: "Get Jha",
  })
  @get()
  static getJha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jha",
  })
  @post("{id}")
  static createJha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
