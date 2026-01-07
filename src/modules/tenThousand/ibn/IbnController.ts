import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibn")
export default class IbnController {
  @operation({
    summary: "Get Ibn",
  })
  @get()
  static getIbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibn",
  })
  @post("{id}")
  static createIbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
