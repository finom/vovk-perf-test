import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gub")
export default class GubController {
  @operation({
    summary: "Get Gub",
  })
  @get()
  static getGub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gub",
  })
  @post("{id}")
  static createGub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
