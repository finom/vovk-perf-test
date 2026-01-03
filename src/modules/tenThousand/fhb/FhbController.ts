import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhbs")
export default class FhbController {
  @operation({
    summary: "Get Fhbs",
  })
  @get()
  static getFhbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhb",
  })
  @post("{id}")
  static createFhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
