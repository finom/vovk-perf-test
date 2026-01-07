import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gry")
export default class GryController {
  @operation({
    summary: "Get Gry",
  })
  @get()
  static getGry = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gry",
  })
  @post("{id}")
  static createGry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
