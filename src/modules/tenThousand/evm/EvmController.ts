import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evm")
export default class EvmController {
  @operation({
    summary: "Get Evm",
  })
  @get()
  static getEvm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evm",
  })
  @post("{id}")
  static createEvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
