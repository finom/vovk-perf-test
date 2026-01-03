import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjms")
export default class KjmController {
  @operation({
    summary: "Get Kjms",
  })
  @get()
  static getKjms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjm",
  })
  @post("{id}")
  static createKjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
