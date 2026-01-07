import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayj")
export default class AyjController {
  @operation({
    summary: "Get Ayj",
  })
  @get()
  static getAyj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayj",
  })
  @post("{id}")
  static createAyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
