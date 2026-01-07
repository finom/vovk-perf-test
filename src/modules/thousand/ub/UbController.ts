import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ub")
export default class UbController {
  @operation({
    summary: "Get Ub",
  })
  @get()
  static getUb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ub",
  })
  @post("{id}")
  static createUb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
