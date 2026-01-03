import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liys")
export default class LiyController {
  @operation({
    summary: "Get Liys",
  })
  @get()
  static getLiys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Liy",
  })
  @post("{id}")
  static createLiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
