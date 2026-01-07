import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxp")
export default class JxpController {
  @operation({
    summary: "Get Jxp",
  })
  @get()
  static getJxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxp",
  })
  @post("{id}")
  static createJxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
