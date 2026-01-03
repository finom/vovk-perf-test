import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvis")
export default class LviController {
  @operation({
    summary: "Get Lvis",
  })
  @get()
  static getLvis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvi",
  })
  @post("{id}")
  static createLvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
