import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arg")
export default class ArgController {
  @operation({
    summary: "Get Arg",
  })
  @get()
  static getArg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arg",
  })
  @post("{id}")
  static createArg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
