import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drks")
export default class DrkController {
  @operation({
    summary: "Get Drks",
  })
  @get()
  static getDrks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drk",
  })
  @post("{id}")
  static createDrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
