import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gohs")
export default class GohController {
  @operation({
    summary: "Get Gohs",
  })
  @get()
  static getGohs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goh",
  })
  @post("{id}")
  static createGoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
