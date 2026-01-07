import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imz")
export default class ImzController {
  @operation({
    summary: "Get Imz",
  })
  @get()
  static getImz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imz",
  })
  @post("{id}")
  static createImz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
