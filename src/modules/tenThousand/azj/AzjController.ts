import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azjs")
export default class AzjController {
  @operation({
    summary: "Get Azjs",
  })
  @get()
  static getAzjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azj",
  })
  @post("{id}")
  static createAzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
