import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbzs")
export default class KbzController {
  @operation({
    summary: "Get Kbzs",
  })
  @get()
  static getKbzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbz",
  })
  @post("{id}")
  static createKbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
