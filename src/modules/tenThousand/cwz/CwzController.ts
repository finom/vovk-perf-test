import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwz")
export default class CwzController {
  @operation({
    summary: "Get Cwz",
  })
  @get()
  static getCwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwz",
  })
  @post("{id}")
  static createCwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
