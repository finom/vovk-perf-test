import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbe")
export default class DbeController {
  @operation({
    summary: "Get Dbe",
  })
  @get()
  static getDbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbe",
  })
  @post("{id}")
  static createDbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
