import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyls")
export default class KylController {
  @operation({
    summary: "Get Kyls",
  })
  @get()
  static getKyls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyl",
  })
  @post("{id}")
  static createKyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
