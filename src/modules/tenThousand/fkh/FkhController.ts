import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkh")
export default class FkhController {
  @operation({
    summary: "Get Fkh",
  })
  @get()
  static getFkh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkh",
  })
  @post("{id}")
  static createFkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
