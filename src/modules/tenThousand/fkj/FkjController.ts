import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkjs")
export default class FkjController {
  @operation({
    summary: "Get Fkjs",
  })
  @get()
  static getFkjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkj",
  })
  @post("{id}")
  static createFkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
