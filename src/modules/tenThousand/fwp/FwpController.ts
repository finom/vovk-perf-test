import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwp")
export default class FwpController {
  @operation({
    summary: "Get Fwp",
  })
  @get()
  static getFwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwp",
  })
  @post("{id}")
  static createFwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
