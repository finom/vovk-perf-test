import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzy")
export default class FzyController {
  @operation({
    summary: "Get Fzy",
  })
  @get()
  static getFzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzy",
  })
  @post("{id}")
  static createFzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
