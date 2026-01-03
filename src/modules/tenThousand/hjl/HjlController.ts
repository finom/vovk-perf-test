import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjls")
export default class HjlController {
  @operation({
    summary: "Get Hjls",
  })
  @get()
  static getHjls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjl",
  })
  @post("{id}")
  static createHjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
