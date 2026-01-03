import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imks")
export default class ImkController {
  @operation({
    summary: "Get Imks",
  })
  @get()
  static getImks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imk",
  })
  @post("{id}")
  static createImk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
