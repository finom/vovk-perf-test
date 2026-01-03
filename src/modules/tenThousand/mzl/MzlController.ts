import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzls")
export default class MzlController {
  @operation({
    summary: "Get Mzls",
  })
  @get()
  static getMzls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzl",
  })
  @post("{id}")
  static createMzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
