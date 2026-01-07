import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dta")
export default class DtaController {
  @operation({
    summary: "Get Dta",
  })
  @get()
  static getDta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dta",
  })
  @post("{id}")
  static createDta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
