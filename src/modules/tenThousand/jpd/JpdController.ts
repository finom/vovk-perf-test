import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpds")
export default class JpdController {
  @operation({
    summary: "Get Jpds",
  })
  @get()
  static getJpds = procedure({
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
