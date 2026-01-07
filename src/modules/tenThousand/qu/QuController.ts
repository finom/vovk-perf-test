import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qu")
export default class QuController {
  @operation({
    summary: "Get Qu",
  })
  @get()
  static getQu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qu",
  })
  @post("{id}")
  static createQu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
