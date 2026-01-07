import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpd")
export default class DpdController {
  @operation({
    summary: "Get Dpd",
  })
  @get()
  static getDpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpd",
  })
  @post("{id}")
  static createDpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
