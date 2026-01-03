import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdos")
export default class BdoController {
  @operation({
    summary: "Get Bdos",
  })
  @get()
  static getBdos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdo",
  })
  @post("{id}")
  static createBdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
