import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmz")
export default class JmzController {
  @operation({
    summary: "Get Jmz",
  })
  @get()
  static getJmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmz",
  })
  @post("{id}")
  static createJmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
