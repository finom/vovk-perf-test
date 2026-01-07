import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwv")
export default class FwvController {
  @operation({
    summary: "Get Fwv",
  })
  @get()
  static getFwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwv",
  })
  @post("{id}")
  static createFwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
