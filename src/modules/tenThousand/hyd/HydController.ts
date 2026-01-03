import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyds")
export default class HydController {
  @operation({
    summary: "Get Hyds",
  })
  @get()
  static getHyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyd",
  })
  @post("{id}")
  static createHyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
