import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezw")
export default class EzwController {
  @operation({
    summary: "Get Ezw",
  })
  @get()
  static getEzw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezw",
  })
  @post("{id}")
  static createEzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
