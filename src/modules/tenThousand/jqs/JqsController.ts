import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqs")
export default class JqsController {
  @operation({
    summary: "Get Jqs",
  })
  @get()
  static getJqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqs",
  })
  @post("{id}")
  static createJqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
