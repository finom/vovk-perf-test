import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iis")
export default class IiController {
  @operation({
    summary: "Get Iis",
  })
  @get()
  static getIis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ii",
  })
  @post("{id}")
  static createIi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
