import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmc")
export default class JmcController {
  @operation({
    summary: "Get Jmc",
  })
  @get()
  static getJmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmc",
  })
  @post("{id}")
  static createJmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
