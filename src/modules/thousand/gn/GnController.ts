import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gn")
export default class GnController {
  @operation({
    summary: "Get Gn",
  })
  @get()
  static getGn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gn",
  })
  @post("{id}")
  static createGn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
