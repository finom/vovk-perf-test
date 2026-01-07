import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cog")
export default class CogController {
  @operation({
    summary: "Get Cog",
  })
  @get()
  static getCog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cog",
  })
  @post("{id}")
  static createCog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
