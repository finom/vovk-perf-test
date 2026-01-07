import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frm")
export default class FrmController {
  @operation({
    summary: "Get Frm",
  })
  @get()
  static getFrm = procedure({
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
