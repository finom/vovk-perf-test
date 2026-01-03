import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irms")
export default class IrmController {
  @operation({
    summary: "Get Irms",
  })
  @get()
  static getIrms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irm",
  })
  @post("{id}")
  static createIrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
