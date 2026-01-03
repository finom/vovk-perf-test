import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jams")
export default class JamController {
  @operation({
    summary: "Get Jams",
  })
  @get()
  static getJams = procedure({
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
