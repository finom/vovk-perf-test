import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhh")
export default class FhhController {
  @operation({
    summary: "Get Fhh",
  })
  @get()
  static getFhh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhh",
  })
  @post("{id}")
  static createFhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
