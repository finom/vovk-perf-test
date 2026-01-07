import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbx")
export default class CbxController {
  @operation({
    summary: "Get Cbx",
  })
  @get()
  static getCbx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbx",
  })
  @post("{id}")
  static createCbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
