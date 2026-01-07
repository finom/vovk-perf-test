import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmc")
export default class BmcController {
  @operation({
    summary: "Get Bmc",
  })
  @get()
  static getBmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmc",
  })
  @post("{id}")
  static createBmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
