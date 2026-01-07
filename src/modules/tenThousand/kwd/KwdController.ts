import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwd")
export default class KwdController {
  @operation({
    summary: "Get Kwd",
  })
  @get()
  static getKwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwd",
  })
  @post("{id}")
  static createKwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
