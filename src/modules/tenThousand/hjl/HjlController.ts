import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjl")
export default class HjlController {
  @operation({
    summary: "Get Hjl",
  })
  @get()
  static getHjl = procedure({
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
