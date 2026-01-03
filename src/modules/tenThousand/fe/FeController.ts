import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fes")
export default class FeController {
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
    summary: "Create Fe",
  })
  @post("{id}")
  static createFe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
