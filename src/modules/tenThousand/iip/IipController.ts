import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iips")
export default class IipController {
  @operation({
    summary: "Get Iips",
  })
  @get()
  static getIips = procedure({
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
