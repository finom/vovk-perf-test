import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byis")
export default class ByiController {
  @operation({
    summary: "Get Byis",
  })
  @get()
  static getByis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byi",
  })
  @post("{id}")
  static createByi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
