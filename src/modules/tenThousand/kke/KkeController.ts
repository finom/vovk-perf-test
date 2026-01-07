import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kke")
export default class KkeController {
  @operation({
    summary: "Get Kke",
  })
  @get()
  static getKke = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kke",
  })
  @post("{id}")
  static createKke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
