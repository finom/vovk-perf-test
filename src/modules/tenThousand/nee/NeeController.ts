import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nees")
export default class NeeController {
  @operation({
    summary: "Get Nees",
  })
  @get()
  static getNees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nee",
  })
  @post("{id}")
  static createNee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
