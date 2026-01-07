import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffn")
export default class FfnController {
  @operation({
    summary: "Get Ffn",
  })
  @get()
  static getFfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffn",
  })
  @post("{id}")
  static createFfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
