import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngm")
export default class NgmController {
  @operation({
    summary: "Get Ngm",
  })
  @get()
  static getNgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngm",
  })
  @post("{id}")
  static createNgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
