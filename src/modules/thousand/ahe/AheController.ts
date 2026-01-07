import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahe")
export default class AheController {
  @operation({
    summary: "Get Ahe",
  })
  @get()
  static getAhe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahe",
  })
  @post("{id}")
  static createAhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
