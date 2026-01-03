import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mics")
export default class MicController {
  @operation({
    summary: "Get Mics",
  })
  @get()
  static getMics = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mic",
  })
  @post("{id}")
  static createMic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
