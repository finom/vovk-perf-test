import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krj")
export default class KrjController {
  @operation({
    summary: "Get Krj",
  })
  @get()
  static getKrj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krj",
  })
  @post("{id}")
  static createKrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
