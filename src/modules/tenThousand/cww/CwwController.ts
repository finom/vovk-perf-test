import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cww")
export default class CwwController {
  @operation({
    summary: "Get Cww",
  })
  @get()
  static getCww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cww",
  })
  @post("{id}")
  static createCww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
