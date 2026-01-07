import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwx")
export default class FwxController {
  @operation({
    summary: "Get Fwx",
  })
  @get()
  static getFwx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwx",
  })
  @post("{id}")
  static createFwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
