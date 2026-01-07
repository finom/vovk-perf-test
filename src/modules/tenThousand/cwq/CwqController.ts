import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwq")
export default class CwqController {
  @operation({
    summary: "Get Cwq",
  })
  @get()
  static getCwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwq",
  })
  @post("{id}")
  static createCwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
