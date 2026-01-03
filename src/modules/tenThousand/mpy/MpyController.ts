import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpies")
export default class MpyController {
  @operation({
    summary: "Get Mpies",
  })
  @get()
  static getMpies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpy",
  })
  @post("{id}")
  static createMpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
