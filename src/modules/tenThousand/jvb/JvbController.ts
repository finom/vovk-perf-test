import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvb")
export default class JvbController {
  @operation({
    summary: "Get Jvb",
  })
  @get()
  static getJvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvb",
  })
  @post("{id}")
  static createJvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
