import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itls")
export default class ItlController {
  @operation({
    summary: "Get Itls",
  })
  @get()
  static getItls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itl",
  })
  @post("{id}")
  static createItl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
