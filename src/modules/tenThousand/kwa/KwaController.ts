import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwas")
export default class KwaController {
  @operation({
    summary: "Get Kwas",
  })
  @get()
  static getKwas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwa",
  })
  @post("{id}")
  static createKwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
