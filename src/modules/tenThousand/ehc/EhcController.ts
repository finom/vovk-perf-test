import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehcs")
export default class EhcController {
  @operation({
    summary: "Get Ehcs",
  })
  @get()
  static getEhcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehc",
  })
  @post("{id}")
  static createEhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
