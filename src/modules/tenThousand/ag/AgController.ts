import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ag")
export default class AgController {
  @operation({
    summary: "Get Ag",
  })
  @get()
  static getAg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ag",
  })
  @post("{id}")
  static createAg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
