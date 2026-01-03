import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgies")
export default class LgyController {
  @operation({
    summary: "Get Lgies",
  })
  @get()
  static getLgies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgy",
  })
  @post("{id}")
  static createLgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
