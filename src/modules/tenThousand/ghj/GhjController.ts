import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghj")
export default class GhjController {
  @operation({
    summary: "Get Ghj",
  })
  @get()
  static getGhj = procedure({
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
