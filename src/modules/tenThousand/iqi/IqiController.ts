import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqis")
export default class IqiController {
  @operation({
    summary: "Get Iqis",
  })
  @get()
  static getIqis = procedure({
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
