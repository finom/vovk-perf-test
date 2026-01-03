import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezs")
export default class EzController {
  @operation({
    summary: "Get Ezs",
  })
  @get()
  static getEzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ez",
  })
  @post("{id}")
  static createEz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
