import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlp")
export default class JlpController {
  @operation({
    summary: "Get Jlp",
  })
  @get()
  static getJlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlp",
  })
  @post("{id}")
  static createJlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
