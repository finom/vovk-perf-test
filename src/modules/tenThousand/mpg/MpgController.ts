import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpg")
export default class MpgController {
  @operation({
    summary: "Get Mpg",
  })
  @get()
  static getMpg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpg",
  })
  @post("{id}")
  static createMpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
