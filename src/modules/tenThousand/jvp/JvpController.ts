import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvp")
export default class JvpController {
  @operation({
    summary: "Get Jvp",
  })
  @get()
  static getJvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvp",
  })
  @post("{id}")
  static createJvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
