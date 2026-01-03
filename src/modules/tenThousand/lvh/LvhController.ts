import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvhs")
export default class LvhController {
  @operation({
    summary: "Get Lvhs",
  })
  @get()
  static getLvhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvh",
  })
  @post("{id}")
  static createLvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
