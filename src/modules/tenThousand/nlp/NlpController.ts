import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlp")
export default class NlpController {
  @operation({
    summary: "Get Nlp",
  })
  @get()
  static getNlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlp",
  })
  @post("{id}")
  static createNlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
