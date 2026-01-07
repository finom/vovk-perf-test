import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aim")
export default class AimController {
  @operation({
    summary: "Get Aim",
  })
  @get()
  static getAim = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aim",
  })
  @post("{id}")
  static createAim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
