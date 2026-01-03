import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azrs")
export default class AzrController {
  @operation({
    summary: "Get Azrs",
  })
  @get()
  static getAzrs = procedure({
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
