import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwv")
export default class FwvController {
  @operation({
    summary: "Get Fwv",
  })
  @get()
  static getFwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwv",
  })
  @post("{id}")
  static createFwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
