import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhms")
export default class FhmController {
  @operation({
    summary: "Get Fhms",
  })
  @get()
  static getFhms = procedure({
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
