import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfa")
export default class CfaController {
  @operation({
    summary: "Get Cfa",
  })
  @get()
  static getCfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfa",
  })
  @post("{id}")
  static createCfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
