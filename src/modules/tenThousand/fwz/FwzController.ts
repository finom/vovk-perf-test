import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwz")
export default class FwzController {
  @operation({
    summary: "Get Fwz",
  })
  @get()
  static getFwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwz",
  })
  @post("{id}")
  static createFwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
