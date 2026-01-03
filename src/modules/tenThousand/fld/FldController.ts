import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flds")
export default class FldController {
  @operation({
    summary: "Get Flds",
  })
  @get()
  static getFlds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fld",
  })
  @post("{id}")
  static createFld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
