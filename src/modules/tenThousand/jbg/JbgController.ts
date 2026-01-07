import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbg")
export default class JbgController {
  @operation({
    summary: "Get Jbg",
  })
  @get()
  static getJbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbg",
  })
  @post("{id}")
  static createJbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
