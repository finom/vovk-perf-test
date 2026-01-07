import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muf")
export default class MufController {
  @operation({
    summary: "Get Muf",
  })
  @get()
  static getMuf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muf",
  })
  @post("{id}")
  static createMuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
