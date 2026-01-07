import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fww")
export default class FwwController {
  @operation({
    summary: "Get Fww",
  })
  @get()
  static getFww = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fww",
  })
  @post("{id}")
  static createFww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
