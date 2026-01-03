import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhqs")
export default class FhqController {
  @operation({
    summary: "Get Fhqs",
  })
  @get()
  static getFhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhq",
  })
  @post("{id}")
  static createFhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
