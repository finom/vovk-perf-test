import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cs")
export default class CController {
  @operation({
    summary: "Get CS",
  })
  @get()
  static getCS = procedure({
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
