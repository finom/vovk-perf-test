import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kljs")
export default class KljController {
  @operation({
    summary: "Get Kljs",
  })
  @get()
  static getKljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klj",
  })
  @post("{id}")
  static createKlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
