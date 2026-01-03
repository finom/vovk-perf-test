import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhcs")
export default class FhcController {
  @operation({
    summary: "Get Fhcs",
  })
  @get()
  static getFhcs = procedure({
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
