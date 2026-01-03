import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhzs")
export default class FhzController {
  @operation({
    summary: "Get Fhzs",
  })
  @get()
  static getFhzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhz",
  })
  @post("{id}")
  static createFhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
