import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwy")
export default class CwyController {
  @operation({
    summary: "Get Cwy",
  })
  @get()
  static getCwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwy",
  })
  @post("{id}")
  static createCwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
