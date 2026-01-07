import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azr")
export default class AzrController {
  @operation({
    summary: "Get Azr",
  })
  @get()
  static getAzr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azr",
  })
  @post("{id}")
  static createAzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
