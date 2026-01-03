import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eats")
export default class EatController {
  @operation({
    summary: "Get Eats",
  })
  @get()
  static getEats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eat",
  })
  @post("{id}")
  static createEat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
