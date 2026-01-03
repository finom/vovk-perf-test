import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhgs")
export default class FhgController {
  @operation({
    summary: "Get Fhgs",
  })
  @get()
  static getFhgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhg",
  })
  @post("{id}")
  static createFhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
