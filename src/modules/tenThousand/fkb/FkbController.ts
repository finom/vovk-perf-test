import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkbs")
export default class FkbController {
  @operation({
    summary: "Get Fkbs",
  })
  @get()
  static getFkbs = procedure({
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
