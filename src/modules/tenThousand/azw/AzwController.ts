import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azw")
export default class AzwController {
  @operation({
    summary: "Get Azw",
  })
  @get()
  static getAzw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azw",
  })
  @post("{id}")
  static createAzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
