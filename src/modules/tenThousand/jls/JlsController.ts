import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jls")
export default class JlsController {
  @operation({
    summary: "Get Jls",
  })
  @get()
  static getJls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jls",
  })
  @post("{id}")
  static createJls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
