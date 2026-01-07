import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwv")
export default class CwvController {
  @operation({
    summary: "Get Cwv",
  })
  @get()
  static getCwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwv",
  })
  @post("{id}")
  static createCwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
