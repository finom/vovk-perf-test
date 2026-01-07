import { procedure, prefix, get, post, operation } from "vovk";

@prefix("em")
export default class EmController {
  @operation({
    summary: "Get Em",
  })
  @get()
  static getEm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Em",
  })
  @post("{id}")
  static createEm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
