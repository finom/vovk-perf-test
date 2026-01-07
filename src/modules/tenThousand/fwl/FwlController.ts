import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwl")
export default class FwlController {
  @operation({
    summary: "Get Fwl",
  })
  @get()
  static getFwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwl",
  })
  @post("{id}")
  static createFwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
