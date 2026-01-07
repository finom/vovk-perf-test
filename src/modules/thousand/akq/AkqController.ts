import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akq")
export default class AkqController {
  @operation({
    summary: "Get Akq",
  })
  @get()
  static getAkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akq",
  })
  @post("{id}")
  static createAkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
