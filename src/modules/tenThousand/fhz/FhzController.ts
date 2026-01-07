import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhz")
export default class FhzController {
  @operation({
    summary: "Get Fhz",
  })
  @get()
  static getFhz = procedure({
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
