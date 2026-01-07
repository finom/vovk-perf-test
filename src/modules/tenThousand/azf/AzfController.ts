import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azf")
export default class AzfController {
  @operation({
    summary: "Get Azf",
  })
  @get()
  static getAzf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azf",
  })
  @post("{id}")
  static createAzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
