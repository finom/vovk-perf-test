import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbv")
export default class KbvController {
  @operation({
    summary: "Get Kbv",
  })
  @get()
  static getKbv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbv",
  })
  @post("{id}")
  static createKbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
