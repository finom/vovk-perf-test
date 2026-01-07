import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpk")
export default class DpkController {
  @operation({
    summary: "Get Dpk",
  })
  @get()
  static getDpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpk",
  })
  @post("{id}")
  static createDpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
