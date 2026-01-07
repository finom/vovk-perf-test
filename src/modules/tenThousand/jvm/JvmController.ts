import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvm")
export default class JvmController {
  @operation({
    summary: "Get Jvm",
  })
  @get()
  static getJvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvm",
  })
  @post("{id}")
  static createJvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
