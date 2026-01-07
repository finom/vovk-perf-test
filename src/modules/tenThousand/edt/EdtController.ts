import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edt")
export default class EdtController {
  @operation({
    summary: "Get Edt",
  })
  @get()
  static getEdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edt",
  })
  @post("{id}")
  static createEdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
