import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpl")
export default class DplController {
  @operation({
    summary: "Get Dpl",
  })
  @get()
  static getDpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpl",
  })
  @post("{id}")
  static createDpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
