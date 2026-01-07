import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwq")
export default class FwqController {
  @operation({
    summary: "Get Fwq",
  })
  @get()
  static getFwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwq",
  })
  @post("{id}")
  static createFwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
