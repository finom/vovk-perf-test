import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbj")
export default class JbjController {
  @operation({
    summary: "Get Jbj",
  })
  @get()
  static getJbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbj",
  })
  @post("{id}")
  static createJbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
