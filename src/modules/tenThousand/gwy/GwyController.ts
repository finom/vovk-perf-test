import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwy")
export default class GwyController {
  @operation({
    summary: "Get Gwy",
  })
  @get()
  static getGwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwy",
  })
  @post("{id}")
  static createGwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
