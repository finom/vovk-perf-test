import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lln")
export default class LlnController {
  @operation({
    summary: "Get Lln",
  })
  @get()
  static getLln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lln",
  })
  @post("{id}")
  static createLln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
