import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nif")
export default class NifController {
  @operation({
    summary: "Get Nif",
  })
  @get()
  static getNif = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nif",
  })
  @post("{id}")
  static createNif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
