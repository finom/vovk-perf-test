import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwcs")
export default class FwcController {
  @operation({
    summary: "Get Fwcs",
  })
  @get()
  static getFwcs = procedure({
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
