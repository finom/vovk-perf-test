import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyjs")
export default class GyjController {
  @operation({
    summary: "Get Gyjs",
  })
  @get()
  static getGyjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyj",
  })
  @post("{id}")
  static createGyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
