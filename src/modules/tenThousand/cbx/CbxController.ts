import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbxes")
export default class CbxController {
  @operation({
    summary: "Get Cbxes",
  })
  @get()
  static getCbxes = procedure({
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
