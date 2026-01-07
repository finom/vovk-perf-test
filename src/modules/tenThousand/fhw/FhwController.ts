import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhw")
export default class FhwController {
  @operation({
    summary: "Get Fhw",
  })
  @get()
  static getFhw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhw",
  })
  @post("{id}")
  static createFhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
