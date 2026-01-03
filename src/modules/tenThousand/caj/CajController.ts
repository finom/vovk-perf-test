import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cajs")
export default class CajController {
  @operation({
    summary: "Get Cajs",
  })
  @get()
  static getCajs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Caj",
  })
  @post("{id}")
  static createCaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
