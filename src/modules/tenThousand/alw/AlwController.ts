import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alw")
export default class AlwController {
  @operation({
    summary: "Get Alw",
  })
  @get()
  static getAlw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alw",
  })
  @post("{id}")
  static createAlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
