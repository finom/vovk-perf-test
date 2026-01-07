import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnd")
export default class MndController {
  @operation({
    summary: "Get Mnd",
  })
  @get()
  static getMnd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnd",
  })
  @post("{id}")
  static createMnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
