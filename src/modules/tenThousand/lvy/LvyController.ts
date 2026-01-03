import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvies")
export default class LvyController {
  @operation({
    summary: "Get Lvies",
  })
  @get()
  static getLvies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvy",
  })
  @post("{id}")
  static createLvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
