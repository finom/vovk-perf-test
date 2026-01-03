import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anrs")
export default class AnrController {
  @operation({
    summary: "Get Anrs",
  })
  @get()
  static getAnrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anr",
  })
  @post("{id}")
  static createAnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
