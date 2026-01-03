import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpjs")
export default class CpjController {
  @operation({
    summary: "Get Cpjs",
  })
  @get()
  static getCpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpj",
  })
  @post("{id}")
  static createCpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
