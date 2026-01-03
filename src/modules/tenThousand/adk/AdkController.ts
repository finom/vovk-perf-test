import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adks")
export default class AdkController {
  @operation({
    summary: "Get Adks",
  })
  @get()
  static getAdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adk",
  })
  @post("{id}")
  static createAdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
