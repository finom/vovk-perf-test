import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loh")
export default class LohController {
  @operation({
    summary: "Get Loh",
  })
  @get()
  static getLoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loh",
  })
  @post("{id}")
  static createLoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
