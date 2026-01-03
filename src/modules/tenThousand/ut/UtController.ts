import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uts")
export default class UtController {
  @operation({
    summary: "Get Uts",
  })
  @get()
  static getUts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ut",
  })
  @post("{id}")
  static createUt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
