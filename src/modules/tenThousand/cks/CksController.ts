import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cks")
export default class CksController {
  @operation({
    summary: "Get Cks",
  })
  @get()
  static getCks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cks",
  })
  @post("{id}")
  static createCks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
