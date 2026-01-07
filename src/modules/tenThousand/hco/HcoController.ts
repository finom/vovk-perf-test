import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hco")
export default class HcoController {
  @operation({
    summary: "Get Hco",
  })
  @get()
  static getHco = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hco",
  })
  @post("{id}")
  static createHco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
