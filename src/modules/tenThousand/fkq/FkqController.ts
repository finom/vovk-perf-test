import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkqs")
export default class FkqController {
  @operation({
    summary: "Get Fkqs",
  })
  @get()
  static getFkqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkq",
  })
  @post("{id}")
  static createFkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
