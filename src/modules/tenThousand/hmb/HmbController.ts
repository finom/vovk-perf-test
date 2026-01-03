import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmbs")
export default class HmbController {
  @operation({
    summary: "Get Hmbs",
  })
  @get()
  static getHmbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmb",
  })
  @post("{id}")
  static createHmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
