import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzos")
export default class GzoController {
  @operation({
    summary: "Get Gzos",
  })
  @get()
  static getGzos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzo",
  })
  @post("{id}")
  static createGzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
