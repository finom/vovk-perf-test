import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsr")
export default class DsrController {
  @operation({
    summary: "Get Dsr",
  })
  @get()
  static getDsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsr",
  })
  @post("{id}")
  static createDsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
