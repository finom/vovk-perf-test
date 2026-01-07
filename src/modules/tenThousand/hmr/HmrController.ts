import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmr")
export default class HmrController {
  @operation({
    summary: "Get Hmr",
  })
  @get()
  static getHmr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmr",
  })
  @post("{id}")
  static createHmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
