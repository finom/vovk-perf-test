import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwc")
export default class FwcController {
  @operation({
    summary: "Get Fwc",
  })
  @get()
  static getFwc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwc",
  })
  @post("{id}")
  static createFwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
