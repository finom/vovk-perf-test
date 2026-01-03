import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdts")
export default class GdtController {
  @operation({
    summary: "Get Gdts",
  })
  @get()
  static getGdts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdt",
  })
  @post("{id}")
  static createGdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
