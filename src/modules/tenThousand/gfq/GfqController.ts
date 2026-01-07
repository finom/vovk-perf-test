import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfq")
export default class GfqController {
  @operation({
    summary: "Get Gfq",
  })
  @get()
  static getGfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfq",
  })
  @post("{id}")
  static createGfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
