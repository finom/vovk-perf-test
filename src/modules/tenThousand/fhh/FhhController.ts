import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhhs")
export default class FhhController {
  @operation({
    summary: "Get Fhhs",
  })
  @get()
  static getFhhs = procedure({
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
