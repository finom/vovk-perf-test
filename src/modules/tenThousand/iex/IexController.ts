import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iex")
export default class IexController {
  @operation({
    summary: "Get Iex",
  })
  @get()
  static getIex = procedure({
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
