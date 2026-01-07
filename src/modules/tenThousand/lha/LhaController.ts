import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lha")
export default class LhaController {
  @operation({
    summary: "Get Lha",
  })
  @get()
  static getLha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lha",
  })
  @post("{id}")
  static createLha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
