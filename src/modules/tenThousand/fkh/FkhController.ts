import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkhs")
export default class FkhController {
  @operation({
    summary: "Get Fkhs",
  })
  @get()
  static getFkhs = procedure({
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
