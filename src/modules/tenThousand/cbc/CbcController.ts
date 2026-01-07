import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbc")
export default class CbcController {
  @operation({
    summary: "Get Cbc",
  })
  @get()
  static getCbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbc",
  })
  @post("{id}")
  static createCbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
