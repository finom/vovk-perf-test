import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eths")
export default class EthController {
  @operation({
    summary: "Get Eths",
  })
  @get()
  static getEths = procedure({
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
