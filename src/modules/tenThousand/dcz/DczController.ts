import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcz")
export default class DczController {
  @operation({
    summary: "Get Dcz",
  })
  @get()
  static getDcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcz",
  })
  @post("{id}")
  static createDcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
