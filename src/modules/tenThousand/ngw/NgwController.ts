import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngw")
export default class NgwController {
  @operation({
    summary: "Get Ngw",
  })
  @get()
  static getNgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngw",
  })
  @post("{id}")
  static createNgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
