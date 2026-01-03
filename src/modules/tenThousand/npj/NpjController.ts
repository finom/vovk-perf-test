import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npjs")
export default class NpjController {
  @operation({
    summary: "Get Npjs",
  })
  @get()
  static getNpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npj",
  })
  @post("{id}")
  static createNpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
