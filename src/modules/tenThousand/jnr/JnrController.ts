import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnr")
export default class JnrController {
  @operation({
    summary: "Get Jnr",
  })
  @get()
  static getJnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnr",
  })
  @post("{id}")
  static createJnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
