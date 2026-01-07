import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngb")
export default class NgbController {
  @operation({
    summary: "Get Ngb",
  })
  @get()
  static getNgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngb",
  })
  @post("{id}")
  static createNgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
