import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eths")
export default class EthController {
  @operation({
    summary: "Get Eths",
  })
  @get()
  static getEths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eth",
  })
  @post("{id}")
  static createEth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
