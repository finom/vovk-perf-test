import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbes")
export default class MbeController {
  @operation({
    summary: "Get Mbes",
  })
  @get()
  static getMbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbe",
  })
  @post("{id}")
  static createMbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
