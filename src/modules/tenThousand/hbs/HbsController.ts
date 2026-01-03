import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbs")
export default class HbsController {
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
    summary: "Create Hbs",
  })
  @post("{id}")
  static createHbs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
