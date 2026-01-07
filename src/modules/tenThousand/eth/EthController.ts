import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eth")
export default class EthController {
  @operation({
    summary: "Get Eth",
  })
  @get()
  static getEth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eth",
  })
  @post("{id}")
  static createEth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
