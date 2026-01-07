import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amx")
export default class AmxController {
  @operation({
    summary: "Get Amx",
  })
  @get()
  static getAmx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amx",
  })
  @post("{id}")
  static createAmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
