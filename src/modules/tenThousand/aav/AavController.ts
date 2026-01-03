import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aavs")
export default class AavController {
  @operation({
    summary: "Get Aavs",
  })
  @get()
  static getAavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aav",
  })
  @post("{id}")
  static createAav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
