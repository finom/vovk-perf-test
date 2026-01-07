import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sa")
export default class SaController {
  @operation({
    summary: "Get Sa",
  })
  @get()
  static getSa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sa",
  })
  @post("{id}")
  static createSa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
