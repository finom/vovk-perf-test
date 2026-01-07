import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlx")
export default class JlxController {
  @operation({
    summary: "Get Jlx",
  })
  @get()
  static getJlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlx",
  })
  @post("{id}")
  static createJlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
