import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcn")
export default class DcnController {
  @operation({
    summary: "Get Dcn",
  })
  @get()
  static getDcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcn",
  })
  @post("{id}")
  static createDcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
