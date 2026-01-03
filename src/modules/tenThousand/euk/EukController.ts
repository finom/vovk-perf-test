import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euks")
export default class EukController {
  @operation({
    summary: "Get Euks",
  })
  @get()
  static getEuks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euk",
  })
  @post("{id}")
  static createEuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
