import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evds")
export default class EvdController {
  @operation({
    summary: "Get Evds",
  })
  @get()
  static getEvds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evd",
  })
  @post("{id}")
  static createEvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
