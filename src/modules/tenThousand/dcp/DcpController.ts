import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcp")
export default class DcpController {
  @operation({
    summary: "Get Dcp",
  })
  @get()
  static getDcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcp",
  })
  @post("{id}")
  static createDcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
