import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hli")
export default class HliController {
  @operation({
    summary: "Get Hli",
  })
  @get()
  static getHli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hli",
  })
  @post("{id}")
  static createHli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
