import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcb")
export default class JcbController {
  @operation({
    summary: "Get Jcb",
  })
  @get()
  static getJcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcb",
  })
  @post("{id}")
  static createJcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
