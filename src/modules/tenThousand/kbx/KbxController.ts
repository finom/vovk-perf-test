import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbx")
export default class KbxController {
  @operation({
    summary: "Get Kbx",
  })
  @get()
  static getKbx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbx",
  })
  @post("{id}")
  static createKbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
