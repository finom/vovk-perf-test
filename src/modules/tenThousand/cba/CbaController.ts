import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cba")
export default class CbaController {
  @operation({
    summary: "Get Cba",
  })
  @get()
  static getCba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cba",
  })
  @post("{id}")
  static createCba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
