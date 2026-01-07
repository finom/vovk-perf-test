import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gut")
export default class GutController {
  @operation({
    summary: "Get Gut",
  })
  @get()
  static getGut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gut",
  })
  @post("{id}")
  static createGut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
