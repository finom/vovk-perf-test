import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lugs")
export default class LugController {
  @operation({
    summary: "Get Lugs",
  })
  @get()
  static getLugs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lug",
  })
  @post("{id}")
  static createLug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
