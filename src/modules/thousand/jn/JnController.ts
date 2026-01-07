import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jn")
export default class JnController {
  @operation({
    summary: "Get Jn",
  })
  @get()
  static getJn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jn",
  })
  @post("{id}")
  static createJn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
