import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehc")
export default class EhcController {
  @operation({
    summary: "Get Ehc",
  })
  @get()
  static getEhc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehc",
  })
  @post("{id}")
  static createEhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
