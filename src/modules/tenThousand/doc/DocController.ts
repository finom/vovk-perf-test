import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doc")
export default class DocController {
  @operation({
    summary: "Get Doc",
  })
  @get()
  static getDoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doc",
  })
  @post("{id}")
  static createDoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
