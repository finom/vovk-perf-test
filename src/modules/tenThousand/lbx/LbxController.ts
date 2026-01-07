import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbx")
export default class LbxController {
  @operation({
    summary: "Get Lbx",
  })
  @get()
  static getLbx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbx",
  })
  @post("{id}")
  static createLbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
