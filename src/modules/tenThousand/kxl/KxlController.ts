import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxls")
export default class KxlController {
  @operation({
    summary: "Get Kxls",
  })
  @get()
  static getKxls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxl",
  })
  @post("{id}")
  static createKxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
