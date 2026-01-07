import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtb")
export default class JtbController {
  @operation({
    summary: "Get Jtb",
  })
  @get()
  static getJtb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtb",
  })
  @post("{id}")
  static createJtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
