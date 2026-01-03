import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwos")
export default class LwoController {
  @operation({
    summary: "Get Lwos",
  })
  @get()
  static getLwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwo",
  })
  @post("{id}")
  static createLwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
