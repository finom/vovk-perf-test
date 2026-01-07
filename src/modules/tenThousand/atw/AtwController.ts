import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atw")
export default class AtwController {
  @operation({
    summary: "Get Atw",
  })
  @get()
  static getAtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atw",
  })
  @post("{id}")
  static createAtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
