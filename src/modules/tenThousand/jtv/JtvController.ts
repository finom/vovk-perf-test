import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtv")
export default class JtvController {
  @operation({
    summary: "Get Jtv",
  })
  @get()
  static getJtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtv",
  })
  @post("{id}")
  static createJtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
