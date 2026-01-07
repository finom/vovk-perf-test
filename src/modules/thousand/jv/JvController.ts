import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jv")
export default class JvController {
  @operation({
    summary: "Get Jv",
  })
  @get()
  static getJv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jv",
  })
  @post("{id}")
  static createJv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
