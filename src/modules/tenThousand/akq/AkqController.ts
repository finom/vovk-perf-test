import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akqs")
export default class AkqController {
  @operation({
    summary: "Get Akqs",
  })
  @get()
  static getAkqs = procedure({
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
