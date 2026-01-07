import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtz")
export default class GtzController {
  @operation({
    summary: "Get Gtz",
  })
  @get()
  static getGtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtz",
  })
  @post("{id}")
  static createGtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
