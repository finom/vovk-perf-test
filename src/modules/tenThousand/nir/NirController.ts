import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nir")
export default class NirController {
  @operation({
    summary: "Get Nir",
  })
  @get()
  static getNir = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nir",
  })
  @post("{id}")
  static createNir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
