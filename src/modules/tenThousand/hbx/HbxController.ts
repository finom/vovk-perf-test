import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbxes")
export default class HbxController {
  @operation({
    summary: "Get Hbxes",
  })
  @get()
  static getHbxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbx",
  })
  @post("{id}")
  static createHbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
