import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhr")
export default class FhrController {
  @operation({
    summary: "Get Fhr",
  })
  @get()
  static getFhr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhr",
  })
  @post("{id}")
  static createFhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
