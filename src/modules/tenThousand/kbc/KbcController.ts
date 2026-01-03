import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbcs")
export default class KbcController {
  @operation({
    summary: "Get Kbcs",
  })
  @get()
  static getKbcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbc",
  })
  @post("{id}")
  static createKbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
