import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ero")
export default class EroController {
  @operation({
    summary: "Get Ero",
  })
  @get()
  static getEro = procedure({
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
