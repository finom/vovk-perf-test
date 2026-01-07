import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkg")
export default class JkgController {
  @operation({
    summary: "Get Jkg",
  })
  @get()
  static getJkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkg",
  })
  @post("{id}")
  static createJkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
