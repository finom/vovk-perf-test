import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abi")
export default class AbiController {
  @operation({
    summary: "Get Abi",
  })
  @get()
  static getAbi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abi",
  })
  @post("{id}")
  static createAbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
