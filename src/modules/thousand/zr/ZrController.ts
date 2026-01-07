import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zr")
export default class ZrController {
  @operation({
    summary: "Get Zr",
  })
  @get()
  static getZr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zr",
  })
  @post("{id}")
  static createZr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
