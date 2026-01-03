import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezhs")
export default class EzhController {
  @operation({
    summary: "Get Ezhs",
  })
  @get()
  static getEzhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezh",
  })
  @post("{id}")
  static createEzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
