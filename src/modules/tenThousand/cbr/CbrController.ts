import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbr")
export default class CbrController {
  @operation({
    summary: "Get Cbr",
  })
  @get()
  static getCbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbr",
  })
  @post("{id}")
  static createCbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
