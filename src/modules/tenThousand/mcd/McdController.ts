import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcd")
export default class McdController {
  @operation({
    summary: "Get Mcd",
  })
  @get()
  static getMcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcd",
  })
  @post("{id}")
  static createMcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
