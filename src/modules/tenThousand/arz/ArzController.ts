import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arzs")
export default class ArzController {
  @operation({
    summary: "Get Arzs",
  })
  @get()
  static getArzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arz",
  })
  @post("{id}")
  static createArz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
