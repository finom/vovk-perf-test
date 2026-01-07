import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frm")
export default class FrmController {
  @operation({
    summary: "Get Frm",
  })
  @get()
  static getFrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frm",
  })
  @post("{id}")
  static createFrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
