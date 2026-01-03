import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzls")
export default class KzlController {
  @operation({
    summary: "Get Kzls",
  })
  @get()
  static getKzls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzl",
  })
  @post("{id}")
  static createKzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
