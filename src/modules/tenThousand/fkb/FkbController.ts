import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkb")
export default class FkbController {
  @operation({
    summary: "Get Fkb",
  })
  @get()
  static getFkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkb",
  })
  @post("{id}")
  static createFkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
