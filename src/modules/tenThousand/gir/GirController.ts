import { procedure, prefix, get, post, operation } from "vovk";

@prefix("girs")
export default class GirController {
  @operation({
    summary: "Get Girs",
  })
  @get()
  static getGirs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gir",
  })
  @post("{id}")
  static createGir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
