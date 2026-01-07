import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjs")
export default class JjsController {
  @operation({
    summary: "Get Jjs",
  })
  @get()
  static getJjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjs",
  })
  @post("{id}")
  static createJjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
