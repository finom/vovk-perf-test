import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egx")
export default class EgxController {
  @operation({
    summary: "Get Egx",
  })
  @get()
  static getEgx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egx",
  })
  @post("{id}")
  static createEgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
