import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atjs")
export default class AtjController {
  @operation({
    summary: "Get Atjs",
  })
  @get()
  static getAtjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atj",
  })
  @post("{id}")
  static createAtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
