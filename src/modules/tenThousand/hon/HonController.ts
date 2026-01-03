import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hons")
export default class HonController {
  @operation({
    summary: "Get Hons",
  })
  @get()
  static getHons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hon",
  })
  @post("{id}")
  static createHon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
