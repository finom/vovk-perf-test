import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpr")
export default class DprController {
  @operation({
    summary: "Get Dpr",
  })
  @get()
  static getDpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpr",
  })
  @post("{id}")
  static createDpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
