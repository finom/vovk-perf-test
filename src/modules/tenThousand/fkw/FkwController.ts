import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkws")
export default class FkwController {
  @operation({
    summary: "Get Fkws",
  })
  @get()
  static getFkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkw",
  })
  @post("{id}")
  static createFkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
