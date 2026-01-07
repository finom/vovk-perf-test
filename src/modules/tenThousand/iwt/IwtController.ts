import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwt")
export default class IwtController {
  @operation({
    summary: "Get Iwt",
  })
  @get()
  static getIwt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwt",
  })
  @post("{id}")
  static createIwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
