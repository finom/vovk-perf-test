import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsl")
export default class JslController {
  @operation({
    summary: "Get Jsl",
  })
  @get()
  static getJsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsl",
  })
  @post("{id}")
  static createJsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
