import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jop")
export default class JopController {
  @operation({
    summary: "Get Jop",
  })
  @get()
  static getJop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jop",
  })
  @post("{id}")
  static createJop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
