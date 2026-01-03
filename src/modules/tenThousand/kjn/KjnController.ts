import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjns")
export default class KjnController {
  @operation({
    summary: "Get Kjns",
  })
  @get()
  static getKjns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjn",
  })
  @post("{id}")
  static createKjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
