import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhp")
export default class FhpController {
  @operation({
    summary: "Get Fhp",
  })
  @get()
  static getFhp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhp",
  })
  @post("{id}")
  static createFhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
