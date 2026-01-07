import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mag")
export default class MagController {
  @operation({
    summary: "Get Mag",
  })
  @get()
  static getMag = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mag",
  })
  @post("{id}")
  static createMag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
