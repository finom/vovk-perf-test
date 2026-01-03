import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwies")
export default class LwyController {
  @operation({
    summary: "Get Lwies",
  })
  @get()
  static getLwies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwy",
  })
  @post("{id}")
  static createLwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
