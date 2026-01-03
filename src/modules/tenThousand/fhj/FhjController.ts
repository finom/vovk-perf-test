import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhjs")
export default class FhjController {
  @operation({
    summary: "Get Fhjs",
  })
  @get()
  static getFhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhj",
  })
  @post("{id}")
  static createFhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
