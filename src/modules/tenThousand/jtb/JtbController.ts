import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtbs")
export default class JtbController {
  @operation({
    summary: "Get Jtbs",
  })
  @get()
  static getJtbs = procedure({
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
