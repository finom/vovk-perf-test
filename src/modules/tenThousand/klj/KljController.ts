import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klj")
export default class KljController {
  @operation({
    summary: "Get Klj",
  })
  @get()
  static getKlj = procedure({
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
