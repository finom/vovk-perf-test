import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwh")
export default class DwhController {
  @operation({
    summary: "Get Dwh",
  })
  @get()
  static getDwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwh",
  })
  @post("{id}")
  static createDwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
