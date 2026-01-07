import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fku")
export default class FkuController {
  @operation({
    summary: "Get Fku",
  })
  @get()
  static getFku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fku",
  })
  @post("{id}")
  static createFku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
