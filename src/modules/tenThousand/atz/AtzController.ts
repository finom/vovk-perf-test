import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atzs")
export default class AtzController {
  @operation({
    summary: "Get Atzs",
  })
  @get()
  static getAtzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atz",
  })
  @post("{id}")
  static createAtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
