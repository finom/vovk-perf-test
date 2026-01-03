import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guns")
export default class GunController {
  @operation({
    summary: "Get Guns",
  })
  @get()
  static getGuns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gun",
  })
  @post("{id}")
  static createGun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
