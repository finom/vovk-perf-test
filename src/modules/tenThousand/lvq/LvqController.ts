import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvq")
export default class LvqController {
  @operation({
    summary: "Get Lvq",
  })
  @get()
  static getLvq = procedure({
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
