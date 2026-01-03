import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rgs")
export default class RgController {
  @operation({
    summary: "Get Rgs",
  })
  @get()
  static getRgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rg",
  })
  @post("{id}")
  static createRg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
