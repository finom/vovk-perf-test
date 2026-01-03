import { procedure, prefix, get, post, operation } from "vovk";

@prefix("os")
export default class OController {
  @operation({
    summary: "Get OS",
  })
  @get()
  static getOS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create O",
  })
  @post("{id}")
  static createO = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
