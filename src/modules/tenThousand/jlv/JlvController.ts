import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlv")
export default class JlvController {
  @operation({
    summary: "Get Jlv",
  })
  @get()
  static getJlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlv",
  })
  @post("{id}")
  static createJlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
