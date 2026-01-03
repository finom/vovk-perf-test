import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjls")
export default class KjlController {
  @operation({
    summary: "Get Kjls",
  })
  @get()
  static getKjls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjl",
  })
  @post("{id}")
  static createKjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
