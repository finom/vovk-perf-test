import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aco")
export default class AcoController {
  @operation({
    summary: "Get Aco",
  })
  @get()
  static getAco = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aco",
  })
  @post("{id}")
  static createAco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
