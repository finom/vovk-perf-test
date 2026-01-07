import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqp")
export default class EqpController {
  @operation({
    summary: "Get Eqp",
  })
  @get()
  static getEqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqp",
  })
  @post("{id}")
  static createEqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
