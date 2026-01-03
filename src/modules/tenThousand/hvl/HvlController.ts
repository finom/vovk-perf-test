import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvls")
export default class HvlController {
  @operation({
    summary: "Get Hvls",
  })
  @get()
  static getHvls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvl",
  })
  @post("{id}")
  static createHvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
