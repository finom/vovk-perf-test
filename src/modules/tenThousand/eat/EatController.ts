import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eat")
export default class EatController {
  @operation({
    summary: "Get Eat",
  })
  @get()
  static getEat = procedure({
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
