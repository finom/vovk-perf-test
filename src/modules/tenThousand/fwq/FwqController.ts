import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwq")
export default class FwqController {
  @operation({
    summary: "Get Fwq",
  })
  @get()
  static getFwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwq",
  })
  @post("{id}")
  static createFwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
