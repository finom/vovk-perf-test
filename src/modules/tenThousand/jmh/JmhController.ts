import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmh")
export default class JmhController {
  @operation({
    summary: "Get Jmh",
  })
  @get()
  static getJmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmh",
  })
  @post("{id}")
  static createJmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
