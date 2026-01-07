import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfw")
export default class GfwController {
  @operation({
    summary: "Get Gfw",
  })
  @get()
  static getGfw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfw",
  })
  @post("{id}")
  static createGfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
