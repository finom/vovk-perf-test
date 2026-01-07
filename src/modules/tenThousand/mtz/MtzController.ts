import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtz")
export default class MtzController {
  @operation({
    summary: "Get Mtz",
  })
  @get()
  static getMtz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtz",
  })
  @post("{id}")
  static createMtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
