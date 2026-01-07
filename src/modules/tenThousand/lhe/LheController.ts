import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhe")
export default class LheController {
  @operation({
    summary: "Get Lhe",
  })
  @get()
  static getLhe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhe",
  })
  @post("{id}")
  static createLhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
