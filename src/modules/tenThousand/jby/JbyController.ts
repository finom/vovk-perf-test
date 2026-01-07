import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jby")
export default class JbyController {
  @operation({
    summary: "Get Jby",
  })
  @get()
  static getJby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jby",
  })
  @post("{id}")
  static createJby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
