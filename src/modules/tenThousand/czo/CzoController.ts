import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czos")
export default class CzoController {
  @operation({
    summary: "Get Czos",
  })
  @get()
  static getCzos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czo",
  })
  @post("{id}")
  static createCzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
