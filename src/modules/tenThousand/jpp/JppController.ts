import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpp")
export default class JppController {
  @operation({
    summary: "Get Jpp",
  })
  @get()
  static getJpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpp",
  })
  @post("{id}")
  static createJpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
