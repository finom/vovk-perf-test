import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crz")
export default class CrzController {
  @operation({
    summary: "Get Crz",
  })
  @get()
  static getCrz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crz",
  })
  @post("{id}")
  static createCrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
