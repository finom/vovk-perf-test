import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwu")
export default class FwuController {
  @operation({
    summary: "Get Fwu",
  })
  @get()
  static getFwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwu",
  })
  @post("{id}")
  static createFwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
