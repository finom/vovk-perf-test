import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ner")
export default class NerController {
  @operation({
    summary: "Get Ner",
  })
  @get()
  static getNer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ner",
  })
  @post("{id}")
  static createNer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
