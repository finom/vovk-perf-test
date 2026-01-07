import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwe")
export default class JweController {
  @operation({
    summary: "Get Jwe",
  })
  @get()
  static getJwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwe",
  })
  @post("{id}")
  static createJwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
