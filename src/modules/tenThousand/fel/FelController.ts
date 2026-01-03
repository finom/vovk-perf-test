import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fels")
export default class FelController {
  @operation({
    summary: "Get Fels",
  })
  @get()
  static getFels = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fel",
  })
  @post("{id}")
  static createFel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
