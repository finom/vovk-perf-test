import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajo")
export default class AjoController {
  @operation({
    summary: "Get Ajo",
  })
  @get()
  static getAjo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajo",
  })
  @post("{id}")
  static createAjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
