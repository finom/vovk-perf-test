import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epjs")
export default class EpjController {
  @operation({
    summary: "Get Epjs",
  })
  @get()
  static getEpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epj",
  })
  @post("{id}")
  static createEpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
