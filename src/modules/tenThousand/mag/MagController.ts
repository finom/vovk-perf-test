import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mags")
export default class MagController {
  @operation({
    summary: "Get Mags",
  })
  @get()
  static getMags = procedure({
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
