import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgos")
export default class MgoController {
  @operation({
    summary: "Get Mgos",
  })
  @get()
  static getMgos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgo",
  })
  @post("{id}")
  static createMgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
