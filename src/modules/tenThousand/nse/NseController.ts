import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nse")
export default class NseController {
  @operation({
    summary: "Get Nse",
  })
  @get()
  static getNse = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nse",
  })
  @post("{id}")
  static createNse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
