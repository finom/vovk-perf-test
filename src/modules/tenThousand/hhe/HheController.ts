import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhes")
export default class HheController {
  @operation({
    summary: "Get Hhes",
  })
  @get()
  static getHhes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhe",
  })
  @post("{id}")
  static createHhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
