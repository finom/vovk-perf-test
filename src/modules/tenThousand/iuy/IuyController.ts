import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuy")
export default class IuyController {
  @operation({
    summary: "Get Iuy",
  })
  @get()
  static getIuy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuy",
  })
  @post("{id}")
  static createIuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
