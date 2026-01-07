import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqt")
export default class EqtController {
  @operation({
    summary: "Get Eqt",
  })
  @get()
  static getEqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqt",
  })
  @post("{id}")
  static createEqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
