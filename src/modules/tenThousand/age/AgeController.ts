import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ages")
export default class AgeController {
  @operation({
    summary: "Get Ages",
  })
  @get()
  static getAges = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Age",
  })
  @post("{id}")
  static createAge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
