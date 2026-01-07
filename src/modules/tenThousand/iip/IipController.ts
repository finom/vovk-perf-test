import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iip")
export default class IipController {
  @operation({
    summary: "Get Iip",
  })
  @get()
  static getIip = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iip",
  })
  @post("{id}")
  static createIip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
