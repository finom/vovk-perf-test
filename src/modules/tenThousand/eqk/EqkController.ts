import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqk")
export default class EqkController {
  @operation({
    summary: "Get Eqk",
  })
  @get()
  static getEqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqk",
  })
  @post("{id}")
  static createEqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
