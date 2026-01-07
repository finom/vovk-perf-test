import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alk")
export default class AlkController {
  @operation({
    summary: "Get Alk",
  })
  @get()
  static getAlk = procedure({
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
