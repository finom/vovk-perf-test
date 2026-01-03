import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huos")
export default class HuoController {
  @operation({
    summary: "Get Huos",
  })
  @get()
  static getHuos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huo",
  })
  @post("{id}")
  static createHuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
