import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nas")
export default class NasController {
  @operation({
    summary: "Get Nas",
  })
  @get()
  static getNas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nas",
  })
  @post("{id}")
  static createNas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
