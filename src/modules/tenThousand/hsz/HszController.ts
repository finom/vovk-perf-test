import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsz")
export default class HszController {
  @operation({
    summary: "Get Hsz",
  })
  @get()
  static getHsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsz",
  })
  @post("{id}")
  static createHsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
