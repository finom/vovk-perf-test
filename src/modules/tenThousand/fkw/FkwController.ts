import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkw")
export default class FkwController {
  @operation({
    summary: "Get Fkw",
  })
  @get()
  static getFkw = procedure({
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
