import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewu")
export default class EwuController {
  @operation({
    summary: "Get Ewu",
  })
  @get()
  static getEwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewu",
  })
  @post("{id}")
  static createEwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
