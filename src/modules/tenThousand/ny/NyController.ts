import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ny")
export default class NyController {
  @operation({
    summary: "Get Ny",
  })
  @get()
  static getNy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ny",
  })
  @post("{id}")
  static createNy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
