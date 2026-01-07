import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngr")
export default class NgrController {
  @operation({
    summary: "Get Ngr",
  })
  @get()
  static getNgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngr",
  })
  @post("{id}")
  static createNgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
