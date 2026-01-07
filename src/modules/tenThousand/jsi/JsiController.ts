import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsi")
export default class JsiController {
  @operation({
    summary: "Get Jsi",
  })
  @get()
  static getJsi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsi",
  })
  @post("{id}")
  static createJsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
