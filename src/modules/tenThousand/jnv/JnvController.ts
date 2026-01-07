import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnv")
export default class JnvController {
  @operation({
    summary: "Get Jnv",
  })
  @get()
  static getJnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnv",
  })
  @post("{id}")
  static createJnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
