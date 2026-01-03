import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhis")
export default class FhiController {
  @operation({
    summary: "Get Fhis",
  })
  @get()
  static getFhis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhi",
  })
  @post("{id}")
  static createFhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
