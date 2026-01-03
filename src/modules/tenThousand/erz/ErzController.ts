import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erzs")
export default class ErzController {
  @operation({
    summary: "Get Erzs",
  })
  @get()
  static getErzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erz",
  })
  @post("{id}")
  static createErz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
