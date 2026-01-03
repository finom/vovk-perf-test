import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdrs")
export default class GdrController {
  @operation({
    summary: "Get Gdrs",
  })
  @get()
  static getGdrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdr",
  })
  @post("{id}")
  static createGdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
