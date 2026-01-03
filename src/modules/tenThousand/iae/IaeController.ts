import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaes")
export default class IaeController {
  @operation({
    summary: "Get Iaes",
  })
  @get()
  static getIaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iae",
  })
  @post("{id}")
  static createIae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
