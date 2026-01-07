import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvn")
export default class LvnController {
  @operation({
    summary: "Get Lvn",
  })
  @get()
  static getLvn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvn",
  })
  @post("{id}")
  static createLvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
