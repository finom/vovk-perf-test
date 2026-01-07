import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cca")
export default class CcaController {
  @operation({
    summary: "Get Cca",
  })
  @get()
  static getCca = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cca",
  })
  @post("{id}")
  static createCca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
