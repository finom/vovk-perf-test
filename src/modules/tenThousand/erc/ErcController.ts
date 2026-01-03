import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ercs")
export default class ErcController {
  @operation({
    summary: "Get Ercs",
  })
  @get()
  static getErcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erc",
  })
  @post("{id}")
  static createErc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
