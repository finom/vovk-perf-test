import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbv")
export default class JbvController {
  @operation({
    summary: "Get Jbv",
  })
  @get()
  static getJbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbv",
  })
  @post("{id}")
  static createJbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
