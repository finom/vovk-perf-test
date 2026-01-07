import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mha")
export default class MhaController {
  @operation({
    summary: "Get Mha",
  })
  @get()
  static getMha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mha",
  })
  @post("{id}")
  static createMha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
