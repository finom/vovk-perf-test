import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnf")
export default class JnfController {
  @operation({
    summary: "Get Jnf",
  })
  @get()
  static getJnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnf",
  })
  @post("{id}")
  static createJnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
