import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqw")
export default class AqwController {
  @operation({
    summary: "Get Aqw",
  })
  @get()
  static getAqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqw",
  })
  @post("{id}")
  static createAqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
