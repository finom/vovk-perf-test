import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzo")
export default class GzoController {
  @operation({
    summary: "Get Gzo",
  })
  @get()
  static getGzo = procedure({
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
