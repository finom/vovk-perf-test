import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mows")
export default class MowController {
  @operation({
    summary: "Get Mows",
  })
  @get()
  static getMows = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mow",
  })
  @post("{id}")
  static createMow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
