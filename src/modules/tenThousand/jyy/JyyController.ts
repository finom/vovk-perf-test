import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyys")
export default class JyyController {
  @operation({
    summary: "Get Jyys",
  })
  @get()
  static getJyys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyy",
  })
  @post("{id}")
  static createJyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
