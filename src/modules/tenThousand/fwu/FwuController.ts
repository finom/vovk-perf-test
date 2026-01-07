import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwu")
export default class FwuController {
  @operation({
    summary: "Get Fwu",
  })
  @get()
  static getFwu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwu",
  })
  @post("{id}")
  static createFwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
