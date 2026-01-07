import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jam")
export default class JamController {
  @operation({
    summary: "Get Jam",
  })
  @get()
  static getJam = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jam",
  })
  @post("{id}")
  static createJam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
