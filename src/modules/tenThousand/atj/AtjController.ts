import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atj")
export default class AtjController {
  @operation({
    summary: "Get Atj",
  })
  @get()
  static getAtj = procedure({
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
