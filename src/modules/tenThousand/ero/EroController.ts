import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eros")
export default class EroController {
  @operation({
    summary: "Get Eros",
  })
  @get()
  static getEros = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ero",
  })
  @post("{id}")
  static createEro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
