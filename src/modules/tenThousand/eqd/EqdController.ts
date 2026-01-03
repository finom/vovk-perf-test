import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqds")
export default class EqdController {
  @operation({
    summary: "Get Eqds",
  })
  @get()
  static getEqds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqd",
  })
  @post("{id}")
  static createEqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
