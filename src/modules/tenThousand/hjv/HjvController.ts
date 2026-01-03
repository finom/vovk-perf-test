import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjvs")
export default class HjvController {
  @operation({
    summary: "Get Hjvs",
  })
  @get()
  static getHjvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjv",
  })
  @post("{id}")
  static createHjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
