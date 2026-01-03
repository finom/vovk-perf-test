import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hres")
export default class HreController {
  @operation({
    summary: "Get Hres",
  })
  @get()
  static getHres = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hre",
  })
  @post("{id}")
  static createHre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
