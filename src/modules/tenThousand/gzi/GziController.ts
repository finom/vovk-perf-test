import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzi")
export default class GziController {
  @operation({
    summary: "Get Gzi",
  })
  @get()
  static getGzi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzi",
  })
  @post("{id}")
  static createGzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
