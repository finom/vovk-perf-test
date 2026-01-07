import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jly")
export default class JlyController {
  @operation({
    summary: "Get Jly",
  })
  @get()
  static getJly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jly",
  })
  @post("{id}")
  static createJly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
