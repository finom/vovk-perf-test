import { procedure, prefix, get, post, operation } from "vovk";

@prefix("q")
export default class QController {
  @operation({
    summary: "Get Q",
  })
  @get()
  static getQ = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Q",
  })
  @post("{id}")
  static createQ = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
