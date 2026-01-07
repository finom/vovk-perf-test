import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbp")
export default class JbpController {
  @operation({
    summary: "Get Jbp",
  })
  @get()
  static getJbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbp",
  })
  @post("{id}")
  static createJbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
