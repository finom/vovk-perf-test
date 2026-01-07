import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjo")
export default class JjoController {
  @operation({
    summary: "Get Jjo",
  })
  @get()
  static getJjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjo",
  })
  @post("{id}")
  static createJjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
