import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brz")
export default class BrzController {
  @operation({
    summary: "Get Brz",
  })
  @get()
  static getBrz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brz",
  })
  @post("{id}")
  static createBrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
