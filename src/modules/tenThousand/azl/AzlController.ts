import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azls")
export default class AzlController {
  @operation({
    summary: "Get Azls",
  })
  @get()
  static getAzls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azl",
  })
  @post("{id}")
  static createAzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
