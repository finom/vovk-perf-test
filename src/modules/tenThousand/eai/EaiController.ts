import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eais")
export default class EaiController {
  @operation({
    summary: "Get Eais",
  })
  @get()
  static getEais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eai",
  })
  @post("{id}")
  static createEai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
