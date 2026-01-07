import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmw")
export default class JmwController {
  @operation({
    summary: "Get Jmw",
  })
  @get()
  static getJmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmw",
  })
  @post("{id}")
  static createJmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
