import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngd")
export default class NgdController {
  @operation({
    summary: "Get Ngd",
  })
  @get()
  static getNgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngd",
  })
  @post("{id}")
  static createNgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
