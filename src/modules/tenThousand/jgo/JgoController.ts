import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgo")
export default class JgoController {
  @operation({
    summary: "Get Jgo",
  })
  @get()
  static getJgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgo",
  })
  @post("{id}")
  static createJgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
