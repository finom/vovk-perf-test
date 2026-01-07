import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvv")
export default class JvvController {
  @operation({
    summary: "Get Jvv",
  })
  @get()
  static getJvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvv",
  })
  @post("{id}")
  static createJvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
