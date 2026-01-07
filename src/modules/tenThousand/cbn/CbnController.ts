import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbn")
export default class CbnController {
  @operation({
    summary: "Get Cbn",
  })
  @get()
  static getCbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbn",
  })
  @post("{id}")
  static createCbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
