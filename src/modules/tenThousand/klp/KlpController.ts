import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klps")
export default class KlpController {
  @operation({
    summary: "Get Klps",
  })
  @get()
  static getKlps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klp",
  })
  @post("{id}")
  static createKlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
