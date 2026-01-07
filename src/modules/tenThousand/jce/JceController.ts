import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jce")
export default class JceController {
  @operation({
    summary: "Get Jce",
  })
  @get()
  static getJce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jce",
  })
  @post("{id}")
  static createJce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
