import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmr")
export default class JmrController {
  @operation({
    summary: "Get Jmr",
  })
  @get()
  static getJmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmr",
  })
  @post("{id}")
  static createJmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
