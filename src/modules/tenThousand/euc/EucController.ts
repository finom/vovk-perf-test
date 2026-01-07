import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euc")
export default class EucController {
  @operation({
    summary: "Get Euc",
  })
  @get()
  static getEuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euc",
  })
  @post("{id}")
  static createEuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
