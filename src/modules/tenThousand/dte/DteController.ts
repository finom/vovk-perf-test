import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dte")
export default class DteController {
  @operation({
    summary: "Get Dte",
  })
  @get()
  static getDte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dte",
  })
  @post("{id}")
  static createDte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
