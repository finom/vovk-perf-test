import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdr")
export default class JdrController {
  @operation({
    summary: "Get Jdr",
  })
  @get()
  static getJdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdr",
  })
  @post("{id}")
  static createJdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
