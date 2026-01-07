import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgj")
export default class DgjController {
  @operation({
    summary: "Get Dgj",
  })
  @get()
  static getDgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgj",
  })
  @post("{id}")
  static createDgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
