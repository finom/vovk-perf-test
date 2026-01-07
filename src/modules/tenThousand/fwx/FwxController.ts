import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwx")
export default class FwxController {
  @operation({
    summary: "Get Fwx",
  })
  @get()
  static getFwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwx",
  })
  @post("{id}")
  static createFwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
