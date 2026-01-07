import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jot")
export default class JotController {
  @operation({
    summary: "Get Jot",
  })
  @get()
  static getJot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jot",
  })
  @post("{id}")
  static createJot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
