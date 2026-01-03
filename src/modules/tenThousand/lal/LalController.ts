import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lals")
export default class LalController {
  @operation({
    summary: "Get Lals",
  })
  @get()
  static getLals = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lal",
  })
  @post("{id}")
  static createLal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
