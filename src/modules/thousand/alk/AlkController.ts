import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alks")
export default class AlkController {
  @operation({
    summary: "Get Alks",
  })
  @get()
  static getAlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alk",
  })
  @post("{id}")
  static createAlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
