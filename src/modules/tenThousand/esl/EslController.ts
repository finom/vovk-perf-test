import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esl")
export default class EslController {
  @operation({
    summary: "Get Esl",
  })
  @get()
  static getEsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esl",
  })
  @post("{id}")
  static createEsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
