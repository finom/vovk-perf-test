import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egg")
export default class EggController {
  @operation({
    summary: "Get Egg",
  })
  @get()
  static getEgg = procedure({
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
