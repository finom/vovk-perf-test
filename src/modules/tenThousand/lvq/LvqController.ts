import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvqs")
export default class LvqController {
  @operation({
    summary: "Get Lvqs",
  })
  @get()
  static getLvqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvq",
  })
  @post("{id}")
  static createLvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
