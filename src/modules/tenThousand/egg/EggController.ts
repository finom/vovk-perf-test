import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eggs")
export default class EggController {
  @operation({
    summary: "Get Eggs",
  })
  @get()
  static getEggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egg",
  })
  @post("{id}")
  static createEgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
