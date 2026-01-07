import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gek")
export default class GekController {
  @operation({
    summary: "Get Gek",
  })
  @get()
  static getGek = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gek",
  })
  @post("{id}")
  static createGek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
