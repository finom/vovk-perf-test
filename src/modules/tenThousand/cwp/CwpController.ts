import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwp")
export default class CwpController {
  @operation({
    summary: "Get Cwp",
  })
  @get()
  static getCwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwp",
  })
  @post("{id}")
  static createCwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
