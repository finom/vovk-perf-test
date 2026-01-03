import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayrs")
export default class AyrController {
  @operation({
    summary: "Get Ayrs",
  })
  @get()
  static getAyrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayr",
  })
  @post("{id}")
  static createAyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
