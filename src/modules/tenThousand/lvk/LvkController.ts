import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvk")
export default class LvkController {
  @operation({
    summary: "Get Lvk",
  })
  @get()
  static getLvk = procedure({
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
