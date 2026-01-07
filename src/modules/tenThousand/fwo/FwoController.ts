import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwo")
export default class FwoController {
  @operation({
    summary: "Get Fwo",
  })
  @get()
  static getFwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwo",
  })
  @post("{id}")
  static createFwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
