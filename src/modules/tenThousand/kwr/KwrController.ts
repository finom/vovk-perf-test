import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwr")
export default class KwrController {
  @operation({
    summary: "Get Kwr",
  })
  @get()
  static getKwr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwr",
  })
  @post("{id}")
  static createKwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
