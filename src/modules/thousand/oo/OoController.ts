import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oos")
export default class OoController {
  @operation({
    summary: "Get Oos",
  })
  @get()
  static getOos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oo",
  })
  @post("{id}")
  static createOo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
