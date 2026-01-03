import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbks")
export default class KbkController {
  @operation({
    summary: "Get Kbks",
  })
  @get()
  static getKbks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbk",
  })
  @post("{id}")
  static createKbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
