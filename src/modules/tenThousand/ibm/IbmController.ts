import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibm")
export default class IbmController {
  @operation({
    summary: "Get Ibm",
  })
  @get()
  static getIbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibm",
  })
  @post("{id}")
  static createIbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
