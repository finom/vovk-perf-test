import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kups")
export default class KupController {
  @operation({
    summary: "Get Kups",
  })
  @get()
  static getKups = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kup",
  })
  @post("{id}")
  static createKup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
