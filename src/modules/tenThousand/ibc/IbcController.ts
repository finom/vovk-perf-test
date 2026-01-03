import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibcs")
export default class IbcController {
  @operation({
    summary: "Get Ibcs",
  })
  @get()
  static getIbcs = procedure({
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
