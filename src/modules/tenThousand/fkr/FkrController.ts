import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkr")
export default class FkrController {
  @operation({
    summary: "Get Fkr",
  })
  @get()
  static getFkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkr",
  })
  @post("{id}")
  static createFkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
