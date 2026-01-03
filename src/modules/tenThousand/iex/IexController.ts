import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iexes")
export default class IexController {
  @operation({
    summary: "Get Iexes",
  })
  @get()
  static getIexes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iex",
  })
  @post("{id}")
  static createIex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
