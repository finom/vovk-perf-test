import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbb")
export default class JbbController {
  @operation({
    summary: "Get Jbb",
  })
  @get()
  static getJbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbb",
  })
  @post("{id}")
  static createJbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
