import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvcs")
export default class LvcController {
  @operation({
    summary: "Get Lvcs",
  })
  @get()
  static getLvcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvc",
  })
  @post("{id}")
  static createLvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
