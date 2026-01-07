import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmb")
export default class JmbController {
  @operation({
    summary: "Get Jmb",
  })
  @get()
  static getJmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmb",
  })
  @post("{id}")
  static createJmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
