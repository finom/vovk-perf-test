import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbr")
export default class KbrController {
  @operation({
    summary: "Get Kbr",
  })
  @get()
  static getKbr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbr",
  })
  @post("{id}")
  static createKbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
