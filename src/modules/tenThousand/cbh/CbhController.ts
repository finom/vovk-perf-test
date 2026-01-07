import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbh")
export default class CbhController {
  @operation({
    summary: "Get Cbh",
  })
  @get()
  static getCbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbh",
  })
  @post("{id}")
  static createCbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
