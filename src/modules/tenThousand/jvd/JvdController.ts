import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvd")
export default class JvdController {
  @operation({
    summary: "Get Jvd",
  })
  @get()
  static getJvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvd",
  })
  @post("{id}")
  static createJvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
