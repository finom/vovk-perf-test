import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibc")
export default class IbcController {
  @operation({
    summary: "Get Ibc",
  })
  @get()
  static getIbc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibc",
  })
  @post("{id}")
  static createIbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
