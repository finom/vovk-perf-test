import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyvs")
export default class GyvController {
  @operation({
    summary: "Get Gyvs",
  })
  @get()
  static getGyvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyv",
  })
  @post("{id}")
  static createGyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
