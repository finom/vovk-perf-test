import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mln")
export default class MlnController {
  @operation({
    summary: "Get Mln",
  })
  @get()
  static getMln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mln",
  })
  @post("{id}")
  static createMln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
