import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iccs")
export default class IccController {
  @operation({
    summary: "Get Iccs",
  })
  @get()
  static getIccs = procedure({
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
