import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbs")
export default class HbController {
  @operation({
    summary: "Get Hbs",
  })
  @get()
  static getHbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hb",
  })
  @post("{id}")
  static createHb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
