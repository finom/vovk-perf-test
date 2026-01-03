import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqvs")
export default class AqvController {
  @operation({
    summary: "Get Aqvs",
  })
  @get()
  static getAqvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqv",
  })
  @post("{id}")
  static createAqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
