import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxa")
export default class FxaController {
  @operation({
    summary: "Get Fxa",
  })
  @get()
  static getFxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxa",
  })
  @post("{id}")
  static createFxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
