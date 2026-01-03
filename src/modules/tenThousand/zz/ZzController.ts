import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zzes")
export default class ZzController {
  @operation({
    summary: "Get Zzes",
  })
  @get()
  static getZzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zz",
  })
  @post("{id}")
  static createZz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
