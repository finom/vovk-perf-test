import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhks")
export default class FhkController {
  @operation({
    summary: "Get Fhks",
  })
  @get()
  static getFhks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhk",
  })
  @post("{id}")
  static createFhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
