import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cezs")
export default class CezController {
  @operation({
    summary: "Get Cezs",
  })
  @get()
  static getCezs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cez",
  })
  @post("{id}")
  static createCez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
