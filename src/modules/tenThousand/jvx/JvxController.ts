import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvx")
export default class JvxController {
  @operation({
    summary: "Get Jvx",
  })
  @get()
  static getJvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvx",
  })
  @post("{id}")
  static createJvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
