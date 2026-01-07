import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqf")
export default class EqfController {
  @operation({
    summary: "Get Eqf",
  })
  @get()
  static getEqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqf",
  })
  @post("{id}")
  static createEqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
