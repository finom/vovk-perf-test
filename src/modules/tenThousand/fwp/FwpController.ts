import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwp")
export default class FwpController {
  @operation({
    summary: "Get Fwp",
  })
  @get()
  static getFwp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwp",
  })
  @post("{id}")
  static createFwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
