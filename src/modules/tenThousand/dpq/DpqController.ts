import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpq")
export default class DpqController {
  @operation({
    summary: "Get Dpq",
  })
  @get()
  static getDpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpq",
  })
  @post("{id}")
  static createDpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
