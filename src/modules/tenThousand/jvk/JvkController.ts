import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvk")
export default class JvkController {
  @operation({
    summary: "Get Jvk",
  })
  @get()
  static getJvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvk",
  })
  @post("{id}")
  static createJvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
