import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icc")
export default class IccController {
  @operation({
    summary: "Get Icc",
  })
  @get()
  static getIcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icc",
  })
  @post("{id}")
  static createIcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
