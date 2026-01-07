import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmx")
export default class JmxController {
  @operation({
    summary: "Get Jmx",
  })
  @get()
  static getJmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmx",
  })
  @post("{id}")
  static createJmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
