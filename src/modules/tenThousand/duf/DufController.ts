import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dufs")
export default class DufController {
  @operation({
    summary: "Get Dufs",
  })
  @get()
  static getDufs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duf",
  })
  @post("{id}")
  static createDuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
