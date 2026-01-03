import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhds")
export default class FhdController {
  @operation({
    summary: "Get Fhds",
  })
  @get()
  static getFhds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhd",
  })
  @post("{id}")
  static createFhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
