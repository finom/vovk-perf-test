import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fww")
export default class FwwController {
  @operation({
    summary: "Get Fww",
  })
  @get()
  static getFww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fww",
  })
  @post("{id}")
  static createFww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
