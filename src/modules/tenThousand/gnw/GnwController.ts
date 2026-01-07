import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnw")
export default class GnwController {
  @operation({
    summary: "Get Gnw",
  })
  @get()
  static getGnw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnw",
  })
  @post("{id}")
  static createGnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
