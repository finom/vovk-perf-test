import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlm")
export default class JlmController {
  @operation({
    summary: "Get Jlm",
  })
  @get()
  static getJlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlm",
  })
  @post("{id}")
  static createJlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
