import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gba")
export default class GbaController {
  @operation({
    summary: "Get Gba",
  })
  @get()
  static getGba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gba",
  })
  @post("{id}")
  static createGba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
