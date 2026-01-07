import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eq")
export default class EqController {
  @operation({
    summary: "Get Eq",
  })
  @get()
  static getEq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eq",
  })
  @post("{id}")
  static createEq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
