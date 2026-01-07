import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apd")
export default class ApdController {
  @operation({
    summary: "Get Apd",
  })
  @get()
  static getApd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apd",
  })
  @post("{id}")
  static createApd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
