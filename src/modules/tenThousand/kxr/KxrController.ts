import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxr")
export default class KxrController {
  @operation({
    summary: "Get Kxr",
  })
  @get()
  static getKxr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxr",
  })
  @post("{id}")
  static createKxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
