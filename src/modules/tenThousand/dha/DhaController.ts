import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dha")
export default class DhaController {
  @operation({
    summary: "Get Dha",
  })
  @get()
  static getDha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dha",
  })
  @post("{id}")
  static createDha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
