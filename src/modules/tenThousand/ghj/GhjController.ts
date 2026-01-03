import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghjs")
export default class GhjController {
  @operation({
    summary: "Get Ghjs",
  })
  @get()
  static getGhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghj",
  })
  @post("{id}")
  static createGhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
