import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fes")
export default class FesController {
  @operation({
    summary: "Get Fes",
  })
  @get()
  static getFes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fes",
  })
  @post("{id}")
  static createFes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
