import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtm")
export default class JtmController {
  @operation({
    summary: "Get Jtm",
  })
  @get()
  static getJtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtm",
  })
  @post("{id}")
  static createJtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
