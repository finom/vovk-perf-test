import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jni")
export default class JniController {
  @operation({
    summary: "Get Jni",
  })
  @get()
  static getJni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jni",
  })
  @post("{id}")
  static createJni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
