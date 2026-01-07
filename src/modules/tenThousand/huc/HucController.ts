import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huc")
export default class HucController {
  @operation({
    summary: "Get Huc",
  })
  @get()
  static getHuc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huc",
  })
  @post("{id}")
  static createHuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
