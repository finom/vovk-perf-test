import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwu")
export default class CwuController {
  @operation({
    summary: "Get Cwu",
  })
  @get()
  static getCwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwu",
  })
  @post("{id}")
  static createCwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
