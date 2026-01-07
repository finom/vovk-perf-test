import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mru")
export default class MruController {
  @operation({
    summary: "Get Mru",
  })
  @get()
  static getMru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mru",
  })
  @post("{id}")
  static createMru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
