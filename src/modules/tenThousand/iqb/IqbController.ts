import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqbs")
export default class IqbController {
  @operation({
    summary: "Get Iqbs",
  })
  @get()
  static getIqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqb",
  })
  @post("{id}")
  static createIqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
