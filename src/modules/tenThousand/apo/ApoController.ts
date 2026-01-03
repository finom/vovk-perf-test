import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apos")
export default class ApoController {
  @operation({
    summary: "Get Apos",
  })
  @get()
  static getApos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apo",
  })
  @post("{id}")
  static createApo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
