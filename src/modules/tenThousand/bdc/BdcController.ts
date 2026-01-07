import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdc")
export default class BdcController {
  @operation({
    summary: "Get Bdc",
  })
  @get()
  static getBdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdc",
  })
  @post("{id}")
  static createBdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
