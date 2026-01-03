import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guys")
export default class GuyController {
  @operation({
    summary: "Get Guys",
  })
  @get()
  static getGuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guy",
  })
  @post("{id}")
  static createGuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
