import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bos")
export default class BosController {
  @operation({
    summary: "Get Bos",
  })
  @get()
  static getBos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bos",
  })
  @post("{id}")
  static createBos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
