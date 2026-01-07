import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgp")
export default class DgpController {
  @operation({
    summary: "Get Dgp",
  })
  @get()
  static getDgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgp",
  })
  @post("{id}")
  static createDgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
