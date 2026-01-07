import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqz")
export default class EqzController {
  @operation({
    summary: "Get Eqz",
  })
  @get()
  static getEqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqz",
  })
  @post("{id}")
  static createEqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
