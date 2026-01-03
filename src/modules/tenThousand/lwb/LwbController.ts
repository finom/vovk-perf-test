import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwbs")
export default class LwbController {
  @operation({
    summary: "Get Lwbs",
  })
  @get()
  static getLwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwb",
  })
  @post("{id}")
  static createLwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
