import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edt")
export default class EdtController {
  @operation({
    summary: "Get Edt",
  })
  @get()
  static getEdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edt",
  })
  @post("{id}")
  static createEdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
