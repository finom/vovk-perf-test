import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewt")
export default class EwtController {
  @operation({
    summary: "Get Ewt",
  })
  @get()
  static getEwt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewt",
  })
  @post("{id}")
  static createEwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
