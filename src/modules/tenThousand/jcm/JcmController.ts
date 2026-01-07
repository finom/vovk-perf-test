import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcm")
export default class JcmController {
  @operation({
    summary: "Get Jcm",
  })
  @get()
  static getJcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcm",
  })
  @post("{id}")
  static createJcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
