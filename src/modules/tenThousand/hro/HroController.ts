import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hros")
export default class HroController {
  @operation({
    summary: "Get Hros",
  })
  @get()
  static getHros = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hro",
  })
  @post("{id}")
  static createHro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
