import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krjs")
export default class KrjController {
  @operation({
    summary: "Get Krjs",
  })
  @get()
  static getKrjs = procedure({
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
