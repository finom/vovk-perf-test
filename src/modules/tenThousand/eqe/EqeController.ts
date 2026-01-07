import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqe")
export default class EqeController {
  @operation({
    summary: "Get Eqe",
  })
  @get()
  static getEqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqe",
  })
  @post("{id}")
  static createEqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
