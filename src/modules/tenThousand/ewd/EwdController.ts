import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewd")
export default class EwdController {
  @operation({
    summary: "Get Ewd",
  })
  @get()
  static getEwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewd",
  })
  @post("{id}")
  static createEwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
