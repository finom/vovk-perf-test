import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhv")
export default class FhvController {
  @operation({
    summary: "Get Fhv",
  })
  @get()
  static getFhv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhv",
  })
  @post("{id}")
  static createFhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
