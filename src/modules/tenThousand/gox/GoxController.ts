import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goxen")
export default class GoxController {
  @operation({
    summary: "Get Goxen",
  })
  @get()
  static getGoxen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gox",
  })
  @post("{id}")
  static createGox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
