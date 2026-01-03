import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tts")
export default class TtController {
  @operation({
    summary: "Get Tts",
  })
  @get()
  static getTts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tt",
  })
  @post("{id}")
  static createTt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
