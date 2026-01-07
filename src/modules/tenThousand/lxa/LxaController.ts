import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxa")
export default class LxaController {
  @operation({
    summary: "Get Lxa",
  })
  @get()
  static getLxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxa",
  })
  @post("{id}")
  static createLxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
