import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fce")
export default class FceController {
  @operation({
    summary: "Get Fce",
  })
  @get()
  static getFce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fce",
  })
  @post("{id}")
  static createFce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
