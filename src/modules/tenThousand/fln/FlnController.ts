import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fln")
export default class FlnController {
  @operation({
    summary: "Get Fln",
  })
  @get()
  static getFln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fln",
  })
  @post("{id}")
  static createFln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
