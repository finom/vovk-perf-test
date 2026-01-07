import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgn")
export default class DgnController {
  @operation({
    summary: "Get Dgn",
  })
  @get()
  static getDgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgn",
  })
  @post("{id}")
  static createDgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
