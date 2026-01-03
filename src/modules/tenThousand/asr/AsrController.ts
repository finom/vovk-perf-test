import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asrs")
export default class AsrController {
  @operation({
    summary: "Get Asrs",
  })
  @get()
  static getAsrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asr",
  })
  @post("{id}")
  static createAsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
