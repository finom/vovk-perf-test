import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvl")
export default class HvlController {
  @operation({
    summary: "Get Hvl",
  })
  @get()
  static getHvl = procedure({
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
