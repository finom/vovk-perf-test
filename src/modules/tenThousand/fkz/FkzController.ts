import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkzs")
export default class FkzController {
  @operation({
    summary: "Get Fkzs",
  })
  @get()
  static getFkzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkz",
  })
  @post("{id}")
  static createFkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
