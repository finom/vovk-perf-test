import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhies")
export default class FhyController {
  @operation({
    summary: "Get Fhies",
  })
  @get()
  static getFhies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhy",
  })
  @post("{id}")
  static createFhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
