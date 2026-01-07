import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhf")
export default class FhfController {
  @operation({
    summary: "Get Fhf",
  })
  @get()
  static getFhf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhf",
  })
  @post("{id}")
  static createFhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
