import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azo")
export default class AzoController {
  @operation({
    summary: "Get Azo",
  })
  @get()
  static getAzo = procedure({
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
