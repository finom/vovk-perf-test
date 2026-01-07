import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhm")
export default class FhmController {
  @operation({
    summary: "Get Fhm",
  })
  @get()
  static getFhm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhm",
  })
  @post("{id}")
  static createFhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
