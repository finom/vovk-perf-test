import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frms")
export default class FrmController {
  @operation({
    summary: "Get Frms",
  })
  @get()
  static getFrms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frm",
  })
  @post("{id}")
  static createFrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
