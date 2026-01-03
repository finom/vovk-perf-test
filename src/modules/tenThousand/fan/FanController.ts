import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fans")
export default class FanController {
  @operation({
    summary: "Get Fans",
  })
  @get()
  static getFans = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fan",
  })
  @post("{id}")
  static createFan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
