import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqws")
export default class AqwController {
  @operation({
    summary: "Get Aqws",
  })
  @get()
  static getAqws = procedure({
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
