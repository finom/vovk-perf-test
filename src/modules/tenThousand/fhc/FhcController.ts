import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhc")
export default class FhcController {
  @operation({
    summary: "Get Fhc",
  })
  @get()
  static getFhc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhc",
  })
  @post("{id}")
  static createFhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
