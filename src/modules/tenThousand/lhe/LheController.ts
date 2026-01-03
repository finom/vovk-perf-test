import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhes")
export default class LheController {
  @operation({
    summary: "Get Lhes",
  })
  @get()
  static getLhes = procedure({
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
