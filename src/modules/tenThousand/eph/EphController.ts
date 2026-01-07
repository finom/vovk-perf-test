import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eph")
export default class EphController {
  @operation({
    summary: "Get Eph",
  })
  @get()
  static getEph = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eph",
  })
  @post("{id}")
  static createEph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
