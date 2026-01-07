import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpd")
export default class JpdController {
  @operation({
    summary: "Get Jpd",
  })
  @get()
  static getJpd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpd",
  })
  @post("{id}")
  static createJpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
