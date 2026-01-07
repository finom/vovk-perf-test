import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqi")
export default class IqiController {
  @operation({
    summary: "Get Iqi",
  })
  @get()
  static getIqi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqi",
  })
  @post("{id}")
  static createIqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
