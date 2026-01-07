import { procedure, prefix, get, post, operation } from "vovk";

@prefix("c")
export default class CController {
  @operation({
    summary: "Get C",
  })
  @get()
  static getC = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create C",
  })
  @post("{id}")
  static createC = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
