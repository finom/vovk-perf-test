import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itl")
export default class ItlController {
  @operation({
    summary: "Get Itl",
  })
  @get()
  static getItl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itl",
  })
  @post("{id}")
  static createItl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
