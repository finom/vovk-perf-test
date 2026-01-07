import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlt")
export default class DltController {
  @operation({
    summary: "Get Dlt",
  })
  @get()
  static getDlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlt",
  })
  @post("{id}")
  static createDlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
