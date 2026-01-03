import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bebs")
export default class BebController {
  @operation({
    summary: "Get Bebs",
  })
  @get()
  static getBebs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Beb",
  })
  @post("{id}")
  static createBeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
