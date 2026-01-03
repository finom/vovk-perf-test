import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvks")
export default class LvkController {
  @operation({
    summary: "Get Lvks",
  })
  @get()
  static getLvks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvk",
  })
  @post("{id}")
  static createLvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
