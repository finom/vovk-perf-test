import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpt")
export default class JptController {
  @operation({
    summary: "Get Jpt",
  })
  @get()
  static getJpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpt",
  })
  @post("{id}")
  static createJpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
