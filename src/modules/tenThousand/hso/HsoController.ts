import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hso")
export default class HsoController {
  @operation({
    summary: "Get Hso",
  })
  @get()
  static getHso = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hso",
  })
  @post("{id}")
  static createHso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
