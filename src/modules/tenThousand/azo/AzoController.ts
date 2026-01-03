import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azos")
export default class AzoController {
  @operation({
    summary: "Get Azos",
  })
  @get()
  static getAzos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azo",
  })
  @post("{id}")
  static createAzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
