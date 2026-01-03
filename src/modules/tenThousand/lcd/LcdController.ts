import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcds")
export default class LcdController {
  @operation({
    summary: "Get Lcds",
  })
  @get()
  static getLcds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcd",
  })
  @post("{id}")
  static createLcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
