import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwv")
export default class CwvController {
  @operation({
    summary: "Get Cwv",
  })
  @get()
  static getCwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwv",
  })
  @post("{id}")
  static createCwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
