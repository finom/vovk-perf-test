import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjt")
export default class GjtController {
  @operation({
    summary: "Get Gjt",
  })
  @get()
  static getGjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjt",
  })
  @post("{id}")
  static createGjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
