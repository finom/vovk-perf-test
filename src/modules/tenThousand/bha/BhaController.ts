import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bha")
export default class BhaController {
  @operation({
    summary: "Get Bha",
  })
  @get()
  static getBha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bha",
  })
  @post("{id}")
  static createBha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
