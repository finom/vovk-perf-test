import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdbs")
export default class KdbController {
  @operation({
    summary: "Get Kdbs",
  })
  @get()
  static getKdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdb",
  })
  @post("{id}")
  static createKdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
