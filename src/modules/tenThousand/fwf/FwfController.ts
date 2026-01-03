import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwfs")
export default class FwfController {
  @operation({
    summary: "Get Fwfs",
  })
  @get()
  static getFwfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwf",
  })
  @post("{id}")
  static createFwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
