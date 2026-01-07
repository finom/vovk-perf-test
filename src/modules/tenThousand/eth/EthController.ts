import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eth")
export default class EthController {
  @operation({
    summary: "Get Eth",
  })
  @get()
  static getEth = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eth",
  })
  @post("{id}")
  static createEth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
