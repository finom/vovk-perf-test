import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nku")
export default class NkuController {
  @operation({
    summary: "Get Nku",
  })
  @get()
  static getNku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nku",
  })
  @post("{id}")
  static createNku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
