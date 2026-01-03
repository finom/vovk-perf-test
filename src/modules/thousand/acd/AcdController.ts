import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acds")
export default class AcdController {
  @operation({
    summary: "Get Acds",
  })
  @get()
  static getAcds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acd",
  })
  @post("{id}")
  static createAcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
