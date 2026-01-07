import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdc")
export default class CdcController {
  @operation({
    summary: "Get Cdc",
  })
  @get()
  static getCdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdc",
  })
  @post("{id}")
  static createCdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
