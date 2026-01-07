import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcj")
export default class DcjController {
  @operation({
    summary: "Get Dcj",
  })
  @get()
  static getDcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcj",
  })
  @post("{id}")
  static createDcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
