import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmk")
export default class JmkController {
  @operation({
    summary: "Get Jmk",
  })
  @get()
  static getJmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmk",
  })
  @post("{id}")
  static createJmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
