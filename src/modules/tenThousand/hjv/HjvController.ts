import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjv")
export default class HjvController {
  @operation({
    summary: "Get Hjv",
  })
  @get()
  static getHjv = procedure({
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
