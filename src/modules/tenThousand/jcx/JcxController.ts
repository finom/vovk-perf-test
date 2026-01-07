import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcx")
export default class JcxController {
  @operation({
    summary: "Get Jcx",
  })
  @get()
  static getJcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcx",
  })
  @post("{id}")
  static createJcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
