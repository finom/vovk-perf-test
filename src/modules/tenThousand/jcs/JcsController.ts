import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcs")
export default class JcsController {
  @operation({
    summary: "Get Jcs",
  })
  @get()
  static getJcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcs",
  })
  @post("{id}")
  static createJcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
