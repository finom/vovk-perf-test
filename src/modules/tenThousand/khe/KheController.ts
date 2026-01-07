import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khe")
export default class KheController {
  @operation({
    summary: "Get Khe",
  })
  @get()
  static getKhe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khe",
  })
  @post("{id}")
  static createKhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
