import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsa")
export default class GsaController {
  @operation({
    summary: "Get Gsa",
  })
  @get()
  static getGsa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsa",
  })
  @post("{id}")
  static createGsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
