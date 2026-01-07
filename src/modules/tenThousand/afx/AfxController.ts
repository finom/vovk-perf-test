import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afx")
export default class AfxController {
  @operation({
    summary: "Get Afx",
  })
  @get()
  static getAfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afx",
  })
  @post("{id}")
  static createAfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
