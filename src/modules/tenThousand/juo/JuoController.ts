import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juo")
export default class JuoController {
  @operation({
    summary: "Get Juo",
  })
  @get()
  static getJuo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juo",
  })
  @post("{id}")
  static createJuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
