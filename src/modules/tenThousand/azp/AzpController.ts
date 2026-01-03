import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azps")
export default class AzpController {
  @operation({
    summary: "Get Azps",
  })
  @get()
  static getAzps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azp",
  })
  @post("{id}")
  static createAzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
