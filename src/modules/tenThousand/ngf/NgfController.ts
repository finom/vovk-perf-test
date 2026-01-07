import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngf")
export default class NgfController {
  @operation({
    summary: "Get Ngf",
  })
  @get()
  static getNgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngf",
  })
  @post("{id}")
  static createNgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
