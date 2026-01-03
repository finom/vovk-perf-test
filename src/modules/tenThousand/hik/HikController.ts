import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiks")
export default class HikController {
  @operation({
    summary: "Get Hiks",
  })
  @get()
  static getHiks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hik",
  })
  @post("{id}")
  static createHik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
