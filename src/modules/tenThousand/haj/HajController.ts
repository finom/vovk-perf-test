import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hajs")
export default class HajController {
  @operation({
    summary: "Get Hajs",
  })
  @get()
  static getHajs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Haj",
  })
  @post("{id}")
  static createHaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
