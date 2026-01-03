import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fps")
export default class FpsController {
  @operation({
    summary: "Get Fps",
  })
  @get()
  static getFps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fps",
  })
  @post("{id}")
  static createFps = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
