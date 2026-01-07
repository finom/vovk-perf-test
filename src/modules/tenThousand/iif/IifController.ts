import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iif")
export default class IifController {
  @operation({
    summary: "Get Iif",
  })
  @get()
  static getIif = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iif",
  })
  @post("{id}")
  static createIif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
