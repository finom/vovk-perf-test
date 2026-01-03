import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drbs")
export default class DrbController {
  @operation({
    summary: "Get Drbs",
  })
  @get()
  static getDrbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drb",
  })
  @post("{id}")
  static createDrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
