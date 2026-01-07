import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ia")
export default class IaController {
  @operation({
    summary: "Get Ia",
  })
  @get()
  static getIa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ia",
  })
  @post("{id}")
  static createIa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
