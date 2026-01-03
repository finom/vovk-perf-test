import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqbs")
export default class HqbController {
  @operation({
    summary: "Get Hqbs",
  })
  @get()
  static getHqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqb",
  })
  @post("{id}")
  static createHqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
