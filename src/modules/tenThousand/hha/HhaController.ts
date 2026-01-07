import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hha")
export default class HhaController {
  @operation({
    summary: "Get Hha",
  })
  @get()
  static getHha = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hha",
  })
  @post("{id}")
  static createHha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
