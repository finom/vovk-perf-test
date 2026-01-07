import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lus")
export default class LusController {
  @operation({
    summary: "Get Lus",
  })
  @get()
  static getLus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lus",
  })
  @post("{id}")
  static createLus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
