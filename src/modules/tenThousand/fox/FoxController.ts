import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fox")
export default class FoxController {
  @operation({
    summary: "Get Fox",
  })
  @get()
  static getFox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fox",
  })
  @post("{id}")
  static createFox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
