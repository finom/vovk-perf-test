import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhrs")
export default class FhrController {
  @operation({
    summary: "Get Fhrs",
  })
  @get()
  static getFhrs = procedure({
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
