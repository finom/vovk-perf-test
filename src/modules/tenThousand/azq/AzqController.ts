import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azq")
export default class AzqController {
  @operation({
    summary: "Get Azq",
  })
  @get()
  static getAzq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azq",
  })
  @post("{id}")
  static createAzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
