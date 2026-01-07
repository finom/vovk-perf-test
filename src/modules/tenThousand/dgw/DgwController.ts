import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgw")
export default class DgwController {
  @operation({
    summary: "Get Dgw",
  })
  @get()
  static getDgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgw",
  })
  @post("{id}")
  static createDgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
