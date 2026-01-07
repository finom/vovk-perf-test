import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcv")
export default class JcvController {
  @operation({
    summary: "Get Jcv",
  })
  @get()
  static getJcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcv",
  })
  @post("{id}")
  static createJcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
