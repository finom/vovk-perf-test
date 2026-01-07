import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guo")
export default class GuoController {
  @operation({
    summary: "Get Guo",
  })
  @get()
  static getGuo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guo",
  })
  @post("{id}")
  static createGuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
