import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpjs")
export default class LpjController {
  @operation({
    summary: "Get Lpjs",
  })
  @get()
  static getLpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpj",
  })
  @post("{id}")
  static createLpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
