import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbg")
export default class KbgController {
  @operation({
    summary: "Get Kbg",
  })
  @get()
  static getKbg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbg",
  })
  @post("{id}")
  static createKbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
